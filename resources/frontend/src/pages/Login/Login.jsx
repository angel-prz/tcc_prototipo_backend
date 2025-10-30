import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useRef } from "react";
import axiosClient from "../../utils/axios-client";
import { useState } from "react";

export default function Login() {
  const { setToken, setUser } = useAuthContext();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
/*   const tipoUserRef = useRef(); */
  const navigate = useNavigate();
  const [tipoUser, setTipoUser] = useState("administrador");

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log({ payload });
    try {
      const response =
        await axiosClient.post("/login", payload);
      const { data } = response;
      /* console.log("teste: " , response) */
      alert("Usuário logado");
      /* console.log("data: "); */
      console.log({data})
      setToken(data.token);
      setUser(data.user);
      /* console.log("tipoUser: ", data.user.tipo_usuario); */
      localStorage.setItem(
        'CURRENT_USER',
        JSON.stringify(data.user)
      );

      if(data.user.tipo_usuario === "administrador")
        navigate("/users");
      if(data.user.tipo_usuario === "profissional")
        navigate("/ProfissionalDashboard");
      if(data.user.tipo_usuario === "paciente")
        navigate("/paciente");

    } catch (error) {
      console.dir({error});
      console.error(error.response.data.message);
      setIsError(true)
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <>
      <div className="">
        <h1 className="text-2xl justify-center">Login</h1>
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
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="text-blue-600 hover:text-blue-500 cursor-pointer">
                  Esqueceu sua senha?
                </span>
              </div>
            </div>
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

//TODO: adicionar transition no botão quando clicar em entrar
