import React from "react";
import { Navigate } from "react-router-dom";
import { getLocal, removeLocal, tokenValidator } from "../utils/helpers";

const AuthGuard = ({ children }) => {
  const token = getLocal("authToken");

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  const isTokenValid = tokenValidator(token);

  console.log(isTokenValid);

  if (!isTokenValid) {
    removeLocal("authToken");
    removeLocal("userId");
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default AuthGuard;
