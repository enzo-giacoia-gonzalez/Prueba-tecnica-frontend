import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {
  const token = localStorage.getItem("token")

  console.log("token:", token); // Agrega esto para verificar el token
  
  return token ? <Outlet /> : <Navigate to="auth/login" replace />
}

