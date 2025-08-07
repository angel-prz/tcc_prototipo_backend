import { useAuthContext } from "../../contexts/AuthProvider";
import { Navigate } from "react-router-dom";


export function Private({children}){
  const { token } = useAuthContext();
  console.log({token})
  if (!token) return <Navigate to="/login" />;
  return children;
}