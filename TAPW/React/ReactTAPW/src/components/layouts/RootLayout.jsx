import { Outlet, Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
<img src={reactLogo} className="logo react" />;

export default function RootLayout() {
  return (
    <>
      <div className="navegacao">
        <nav>
          <Link to="/">Home</Link> | <Link to="/contactos">Contactos</Link> | <Link to="/others">Others</Link> | <Link to="/eventos-dinamicos">Eventos Dinâmicos</Link> | <Link to="/cursos">Cursos</Link> | <Link to="/prendas">Lista de Prendas</Link> | <Link to="/places">Places</Link> | <Link to="/star-wars-people">Star Wars People</Link> | <Link to="/star-wars-films">Star Wars Films</Link> | <Link to="/register">Registar</Link>{" "}
        </nav>
      </div>

      <Outlet />
      <footer>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </>
  );
}
