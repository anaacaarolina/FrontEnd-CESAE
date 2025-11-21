import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function HomePage() {
  const location = useLocation();
  const message = location.state?.message;
  const { logout, user } = useContext(AuthContext);

  return (
    <>
      <div>
        <h3>As minhas funcionalidades</h3>
        <Link to="/contactos">Os meus contactos</Link>
        <br />
        <Link to="/others">Others</Link>
        <br />
        <Link to="/eventos-dinamicos">Eventos Dinâmicos</Link>
        <br />
        <Link to="/prendas">Lista de Prendas</Link>
        <br />

        {user && user.role == "student" && <Link to="/cursos">Cursos</Link>}
        <br />

        {!user ? (
          <div>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/register">Registo</Link>
          </div>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
      <div>{message && <div>{message}</div>}</div>
    </>
  );
}
