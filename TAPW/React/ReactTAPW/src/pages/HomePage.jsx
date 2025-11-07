import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h3>As minhas funcionalidades</h3>
      <Link to="/contactos">Os meus contactos</Link>
      <br />
      <Link to="/others">Others</Link>
      <br />
      <Link to="/eventos-dinamicos">Eventos Dinâmicos</Link>
      <br />
      <Link to="/prendas">Lista de Prendas</Link>
    </div>
  );
}
