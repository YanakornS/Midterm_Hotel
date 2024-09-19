import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Contexts/AuthContext";

const ModOrAdminPage = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if(user.roles.includes("ROLES_ADMIN")||
      user.roles.includes("ROLES_MODDERATOR")
  )
  return children;

  return <Navigate to="/notallowed" />;
};

export default ModOrAdminPage;