import "./botao.css";

export default function Botao({ children, aoClicar }) {
  return <button onClick={aoClicar}>{children}</button>;
}
