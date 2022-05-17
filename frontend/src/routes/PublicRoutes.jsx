import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth/authContext";

export const PublicRoutes = ({ children }) => {
  const {user} = useContext(AuthContext)
  const logged = user.logged;
  return logged ? <Navigate to="/my-application" /> : children;
};
