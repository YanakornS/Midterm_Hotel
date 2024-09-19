import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Contexts/AuthContext";

const AdminPage = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (user.roles.includes("ROLES_ADMIN")) return children;

  return <Navigate to="/notallowed" />;
};

export default AdminPage;