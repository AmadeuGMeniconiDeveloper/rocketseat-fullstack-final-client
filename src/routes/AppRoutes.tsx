import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AuthContext } from "@/context/AuthContext";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import FoodDetails from "@/pages/FoodDetails/inded";

function AppRoutes() {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  const userRole = auth?.user.role;

  return (
    <Routes>
      <Route
        path="/"
        element={
          auth ? (
            <Layout />
          ) : (
            <Navigate to="/signin" state={{ from: location }} replace />
          )
        }
      >
        <Route index element={<Home />} />

        <Route path="details/:id" element={<FoodDetails />} />

        <Route
          path="edit/:id"
          element={
            userRole === "ADMIN" ? (
              <FoodDetails />
            ) : (
              <Navigate to="/" state={{ from: location }} replace />
            )
          }
        />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
