import { Navigate, Outlet } from "react-router";
import { useProfileUser } from "@/entities/api";

const RedirectIfAuthenticated = ({ redirectPath = "/Feed" }) => {
  const { data: user, isLoading, isError } = useProfileUser();
  const isAuthenticated = Boolean(user && !isError);

  if (isLoading) return <div>Loading...</div>;
  if (isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default RedirectIfAuthenticated;
