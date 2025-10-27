import Botao from "./botao";
import { CORE_CONCEPTS, EXAMPLES } from "../data/coreConcepts";
import { useState } from "react";

export default function ReactSubject() {
  const [description, setDescription] = useState("Escrever a descrição");

  function getDescription() {}

  return (
    <div>
      <h3>Matéria de React</h3>
      <menu>
        <Botao aoClicar={() => getDescription("jsx")}>JSX</Botao>
        <Botao aoClicar={() => getDescription("props")}>Props</Botao>
        <Botao aoClicar={() => getDescription("state")}>State</Botao>
      </menu>
      <div>{description}</div>
    </div>
  );
}
