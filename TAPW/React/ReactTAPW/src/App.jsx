import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import MainGoal from "./components/MainGoal";
import FirstComponent from "./components/FirstComponent";
import CourseGoal from "./components/CourseGoal";
import userData from "./data/userData.js";
import objetivos from "./data/objetivos.js";
import courseGoal from "./data/courseGoal.js";
import Botao from "./components/botao.jsx";
import Login from "./components/Login.jsx";
import Discount from "./components/Discount.jsx";
import ReactSubject from "./components/ReactSubject.jsx";
import Delete from "./components/Delete.jsx";

<img src={reactLogo} className="logo react" />;

function App() {
  function alertHeySubmit() {
    alert("Atenção! Ainda falta documento para pagamento!");
  }
  // variáveis sem estado
  // let chosenSubject = "Escolha a matéria: ";

  // estados do react -> useState
  const [chosenSubject, setChosenSubject] = useState("Escolha a matéria: ");

  function getSubject(subject) {
    alert("Matéria completa de " + subject);
    setChosenSubject("a matéria é " + subject);
  }

  return (
    <>
      <FirstComponent />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Front End Developer: React</h1>
      <CourseGoal {...courseGoal} />
      <Card firstName="Carolina" title="aluna" />
      <Card firstName={userData.firstName} lastName={userData.lastName} title={userData.title} />
      <Card {...userData} />
      <Botao aoClicar={alertHeySubmit}>Submeter</Botao>
      <MainGoal objetivo={objetivos[0]} />
      <MainGoal objetivo={objetivos[1]} />
      <MainGoal objetivo={objetivos[2]} />
      <FirstComponent />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <h3>Eventos Dinâmicos</h3>
      <menu>
        <Botao aoClicar={() => getSubject("JS")}>Matéria JS</Botao>
        <Botao aoClicar={() => getSubject("React")}>Matéria React</Botao>
        <Botao aoClicar={() => getSubject("SQL")}>Matéria SQL</Botao>
        <div>{chosenSubject}</div>
      </menu>
      <Login />
      <Discount />
      <ReactSubject />
      <Delete />
    </>
  );
}

export default App;
