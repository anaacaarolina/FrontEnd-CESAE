import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h3>As minhas funcionalidades</h3>
      <p>
        Com o elemento a:
        <a href="/contactos"> Os meus contactos</a>
      </p>
      <p>
        Com o Link do React: <Link to="/contactos">Os meus contactos</Link>
      </p>
      <Link to="/others">Others</Link>
      <br />
      <Link to="/eventos-dinamicos">Eventos Dinâmicos</Link>
    </div>
  );
}
