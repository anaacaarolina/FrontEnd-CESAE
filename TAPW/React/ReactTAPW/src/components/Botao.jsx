import "./botao.css";

export default function Botao({ children, aoClicar, isActive }) {
  return (
    <button onClick={aoClicar} className={isActive ? "active" : ""}>
      {children}
    </button>
  );
}
