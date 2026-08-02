import { Navigate } from "react-router-dom";
import { getData } from "../utils/storage";

function ProtectedRoute({ children }) {
  const isLoggedIn = getData("payflowLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;