import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, roles }) {
  // {role, firstame, email}
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  if (!user || !user.role || !user.email || !user.firstName) {
    return <Navigate to="/login" replace />;
  }
  // console.log(roles);
  if (!roles.includes(user.role)) {
    // console.log("reditercting to home");
    return <Navigate to="/" replace />;
  }

  return element;
}
