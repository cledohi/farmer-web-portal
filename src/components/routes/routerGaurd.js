import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ token, children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      // user is not authenticated
      navigate("/");
    }
  }, [token, navigate]);

  if (!token) {
    // Return null or some content to be displayed when not authenticated
    return null;
  }

  return children;
};

export default ProtectedRoute;
