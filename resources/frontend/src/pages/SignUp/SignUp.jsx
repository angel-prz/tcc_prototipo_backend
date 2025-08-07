import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./signup.css";

export default function SignUp() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [disableButton, setDisableButton] = useState(true);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEnableButton = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    setDisableButton(
      !name || !email || !password || password !== confirmPassword
    );
    setEmailInvalid(!emailPattern.test(email));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value,
    };
    console.log({ payload });
    alert("Conta Criada!! Verifique seu email para ativar sua conta.");
    navigate("/login");
  };

  return (
    <div className="signup__container">
      <div className="form">
        <form action="" method="get" onSubmit={onSubmit}>
          <h1 className="title">Novo Usuário</h1>
          <input
            type="text"
            placeholder="Nome de Login"
            name="name"
            ref={nameRef}
            onChange={handleEnableButton}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={emailRef}
            onChange={handleEnableButton}
          />
          {emailInvalid && <pre>{`Campo Email é inválido!!!`}</pre>}
          <input
            type="password"
            placeholder="Senha"
            ref={passwordRef}
            name="password"
            onChange={handleEnableButton}
          />
          <input
            type="password"
            placeholder="Confirmar a senha"
            name="password_confirm"
            ref={confirmPasswordRef}
            onChange={handleEnableButton}
          />
          <button
            className={disableButton ? "btn-disabled btn-block" : "btn btn-block"}
            disabled={disableButton}
          >
            Cadastrar
          </button>
          <p className="message">
            Já tem conta? 
            <Link to="/login">Faça o login!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}