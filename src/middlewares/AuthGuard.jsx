import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getLocal, removeLocal, tokenValidator } from "../utils/helpers";

const AuthGuard = ({ children }) => {
  const token = getLocal("authToken");
  const location = useLocation();

  useEffect(() => {
    // Listener for token changes (logout from another part of the app)
    const interval = setInterval(() => {
      const currentToken = getLocal("authToken");
      if (!currentToken || !tokenValidator(currentToken)) {
        // Clear invalid token data
        removeLocal("authToken");
        removeLocal("userId");
        window.location.href = "/signin"; // Force immediate redirection
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [location]);

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  const isTokenValid = tokenValidator(token);

  if (!isTokenValid) {
    removeLocal("authToken");
    removeLocal("userId");
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default AuthGuard;
