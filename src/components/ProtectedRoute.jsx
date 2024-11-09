// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../customeHooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/signin" replace />;
  }

  // Render children components if the user is authenticated
  return children;
};

export default ProtectedRoute;
