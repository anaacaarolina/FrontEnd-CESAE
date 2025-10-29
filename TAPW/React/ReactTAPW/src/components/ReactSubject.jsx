import Botao from "./botao";
import { CORE_CONCEPTS, EXAMPLES } from "../data/coreConcepts";
import { useState } from "react";

export default function ReactSubject() {
  const [description, setDescription] = useState();

  function getDescription(subject) {
    setDescription(subject);
  }

  return (
    <div>
      <h3>Matéria de React</h3>
      <menu>
        <Botao isActive={description == "components"} aoClicar={() => getDescription("components")}>
          Componentes
        </Botao>
        <Botao isActive={description == "jsx"} aoClicar={() => getDescription("jsx")}>
          JSX
        </Botao>
        <Botao isActive={description == "props"} aoClicar={() => getDescription("props")}>
          Props
        </Botao>
        <Botao isActive={description == "state"} aoClicar={() => getDescription("state")}>
          State
        </Botao>
      </menu>
      {description && (
        <div id="tab-content">
          <h4>{EXAMPLES[description].title ? EXAMPLES[description].title : "título não carregado"} </h4>
          <p>{EXAMPLES[description].description ? EXAMPLES[description].description : "descrição não carregada"}</p>
          <pre>
            <code>{EXAMPLES[description].code ? EXAMPLES[description].code : "código não carregado"}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
