import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../features/security/store";

export const ProtectedLayout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const validateAuthentication = useAuthStore((state) => state.validateAuthentication);

  validateAuthentication();

  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};
