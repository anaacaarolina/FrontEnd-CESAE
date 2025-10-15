// import { useState } from "react";
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

<img src={reactLogo} className="logo react" />;

function App() {
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
      <Card firstName="Carolina" title="aluna" />
      <Card firstName={userData.firstName} lastName={userData.lastName} title={userData.title} />
      <Card {...userData} />
      <MainGoal objetivo={objetivos[0]} />
      <MainGoal objetivo={objetivos[1]} />
      <MainGoal objetivo={objetivos[2]} />
      <FirstComponent />
      <CourseGoal {...courseGoal} />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
