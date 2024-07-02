import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthContext } from "@/context/AuthContext";

function RequireRouteAuth() {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
}

export default RequireRouteAuth;
