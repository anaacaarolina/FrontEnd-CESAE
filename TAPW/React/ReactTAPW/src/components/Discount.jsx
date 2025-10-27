import { useState } from "react";

export default function Discount() {
  const [price, setPrice] = useState(100);
  const [botaoClicado, setBotaoClicado] = useState(false);

  function aplicarDesconto() {
    setPrice(price * 0.75);
    setBotaoClicado(true);
  }

  return (
    <div>
      <p>{botaoClicado ? "Preço com desconto:" : "Preço sem desconto:"}</p>
      <p>{price}</p>
      {botaoClicado ? (
        <button className="botaoPreco" disabled>
          Desconto Aplicado
        </button>
      ) : (
        <button className="botaoPreco" onClick={() => aplicarDesconto()}>
          Aplicar Desconto
        </button>
      )}
    </div>
  );
}
