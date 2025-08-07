import React from "react";
import { Navigate, /* useNavigate */ } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";

const Logout = () => {
  
  //const navigate = useNavigate();
  const { setToken } = useAuthContext();
  setToken(null);
  alert("Usuário desconectado!");
  return <Navigate to="/login" />; 
  //navigate("/");
};

export default Logout;