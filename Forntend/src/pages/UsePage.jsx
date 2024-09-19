import React from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

const UsePage = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default UsePage;