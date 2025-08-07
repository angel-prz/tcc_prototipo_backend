import { Link  } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useRef } from "react";
import { useState } from "react";
import { autenticar } from "../../../tests/logintest";


export default function Login() {
  const { setToken, setUser } = useAuthContext();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
/*   const tipoUserRef = useRef(); */  
  const [tipoUser, setTipoUser] = useState("administrador");

    //onsubmit test
  const onSubmit = async (event) => {
  event.preventDefault();

  const email = emailRef.current.value;
  const senha = passwordRef.current.value;

  const resultado = await autenticar(email, senha);

  if (resultado.sucesso) {
    alert("Usuário logado");
    setToken(resultado.dados.token);
    setUser(resultado.dados.user);
    localStorage.setItem('CURRENT_USER', JSON.stringify(resultado.dados.user));
    // Redirecionamento conforme o tipo de usuário
  } else {
    setIsError(true);
    setErrorMessage(resultado.mensagem);
  }
  }

  return (
    <>
      <h1>Login</h1>
      <div className="height: 50vh display: flex flex-direction: column justify-content: center align-items: center">
        <br />
        <form
          id="form_login"
          name="form_login"
          action=""
          method="post"
          onSubmit={onSubmit}
        >
          <p>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:{' '}
            </label>
            <input
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ref={emailRef}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </p>
          <p>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-gray-700"
            >
              Senha:{' '}
            </label>
            <input
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ref={passwordRef}
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
            />
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="text-blue-600 hover:text-blue-500 cursor-pointer">
                  Esqueceu sua senha?
                </span>
              </div>
            </div>
          </p>
          <p>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de usuário:
            </label>
            <div>
              <label >
                <input
                  type="radio"
                  name="tipoUser"
                  value="administrador"
                  checked={tipoUser === "administrador"}
                  onChange={() => setTipoUser("administrador")}
                />
                Administrador
              </label>
              <label className="ml-10">
                <input
                  type="radio"
                  name="tipoUser"
                  value="profissionalSaude"
                  checked={tipoUser === "profissionalSaude"}
                  onChange={() => setTipoUser("profissionalSaude")}
                  disabled
                />
                Profissional de Saúde
              </label>
              <label className="ml-10">
                <input
                  type="radio"
                  name="tipoUser"
                  value="paciente"
                  checked={tipoUser === "paciente"}
                  onChange={() => setTipoUser("paciente")}
                  disabled
                />
                Paciente
              </label>
            </div>
          </p>
          <p>
            <button
              type="submit"
              id="entrar"
              name="entrar"
              value="Entrar"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
            >
              Entrar
            </button>
          </p>
          <div>
            <p>
              <Link to="/register">
                <span className="text-blue-600 hover:text-blue-500 cursor-pointer">
                  Criar conta!
                </span>
              </Link>
            </p>
          </div>
        </form>
        {isError && <p style={{color:'red'}}>Erro ao logar!!!</p>}
        {isError && <p style={{color:'red'}}>{errorMessage}</p>}
      </div>
    </>
  );
}
