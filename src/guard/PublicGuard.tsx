import { Navigate, Outlet } from "react-router-dom";

export const PublicGuard = () => {
  const token = localStorage.getItem("token")
  return !token ? <Outlet /> : <Navigate to="/dashboard" replace />
}
