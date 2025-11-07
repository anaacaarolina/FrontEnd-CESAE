import Botao from "../components/botao";
import ReactSubject from "../components/ReactSubject";
import { useState } from "react";
import ShoppingList from "../components/ShoppingList";

export default function ReactDynamic() {
  const [chosenSubject, setChosenSubject] = useState("Escolha a matéria: ");

  function getSubject(subject) {
    alert("Matéria completa de " + subject);
    setChosenSubject("a matéria é " + subject);
  }

  return (
    <div>
      <h3>Eventos Dinâmicos</h3>
      <menu>
        <Botao aoClicar={() => getSubject("JS")}>Matéria JS</Botao>
        <Botao aoClicar={() => getSubject("React")}>Matéria React</Botao>
        <Botao aoClicar={() => getSubject("SQL")}>Matéria SQL</Botao>
        <div>{chosenSubject}</div>
      </menu>
      <ReactSubject />
      <ShoppingList />
    </div>
  );
}
