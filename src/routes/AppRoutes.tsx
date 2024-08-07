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
import Favorites from "@/pages/Favorites";
import Cart from "@/pages/Cart";

interface AppRoutesProps {
  toggleTheme: () => void;
}

function AppRoutes({ toggleTheme }: AppRoutesProps) {
  const { auth, isAdmin } = useContext(AuthContext);
  const location = useLocation();

  if (auth) {
    return (
      <Routes>
        <Route path="/" element={<Layout toggleTheme={toggleTheme} />}>
          {/* //#DO: Implement customer routes: Orders & Payment */}
          <Route path="home" element={<Home />} />
          <Route path="details/:id" element={<FoodDetails />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={<Cart />} />

          {isAdmin && (
            <>
              <Route path="edit/:id" element={<FoodEdit />} />
              <Route path="new" element={<FoodNew />} />
            </>
          )}

          {/* //#DO: Implement 404 page */}
          <Route
            path="*"
            element={<Navigate to="/home" state={{ from: location }} replace />}
          />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* //#DO: Implement 404 page */}
        <Route
          path="*"
          element={<Navigate to="/signin" state={{ from: location }} replace />}
        />
      </Routes>
    );
  }
}

export default AppRoutes;
