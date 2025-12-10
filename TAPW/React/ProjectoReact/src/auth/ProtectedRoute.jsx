import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, roles }) {
  // {role, firstame, email}
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  //Redireciona o utilizador para o login se alguma informação estiver a faltar
  if (!user || !user.role || !user.email || !user.firstName) {
    return <Navigate to="/login" replace />;
  }
  // console.log(roles);

  //Redireciona o utilizador para a homepage se o seu role não tiver autorização para ver a route
  if (!roles.includes(user.role)) {
    // console.log("reditercting to home");
    return <Navigate to="/" replace />;
  }

  return element;
}
