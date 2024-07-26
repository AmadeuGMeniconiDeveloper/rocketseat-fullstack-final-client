import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthContext";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import FoodDetails from "@/pages/FoodDetails";
import FoodNew from "@/pages/FoodNew";
import FoodEdit from "@/pages/FoodEdit";

function AppRoutes() {
  const { auth, isAdmin } = useContext(AuthContext);
  const location = useLocation();

  if (auth) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/new" element={<FoodNew />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<FoodDetails />} />
          {isAdmin && (
            <>
              <Route path="/edit/:id" element={<FoodEdit />} />
              <Route path="/new" element={<FoodNew />} />
            </>
          )}

          <Route
            path="*"
            element={
              <Navigate to="/signin" state={{ from: location }} replace />
            }
          />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="*"
          element={<Navigate to="/signin" state={{ from: location }} replace />}
        />
      </Routes>
    );
  }
}

export default AppRoutes;
