import { Outlet, Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
<img src={reactLogo} className="logo react" />;

export default function RootLayout() {
  return (
    <>
      <div className="navegacao">
        <nav>
          <Link to="/">Home</Link> | <Link to="/contactos">Contactos</Link> | <Link to="/others">Others</Link> | <Link to="/eventos-dinamicos">Eventos Dinâmicos</Link> | <Link to="/cursos">Cursos</Link>{" "}
        </nav>
      </div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <Outlet />
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
