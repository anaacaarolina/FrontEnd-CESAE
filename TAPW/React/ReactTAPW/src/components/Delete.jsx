import "./delete.css";
import Botao from "./botao";
import { useState } from "react";

export default function Delete() {
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      {ativo && (
        <div data-testid="alert" id="alert">
          <div className="div_confirmacao">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <Botao aoClicar={() => setAtivo(false)}>Proceed</Botao>
          </div>
        </div>
      )}
      <Botao aoClicar={() => setAtivo(true)}>Delete</Botao>
    </div>
  );
}
