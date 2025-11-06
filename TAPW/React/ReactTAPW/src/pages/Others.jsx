import FirstComponent from "../components/FirstComponent";
import CourseGoal from "../components/CourseGoal";
import courseGoal from "../data/courseGoal.js";
import Botao from "../components/botao.jsx";
import MainGoal from "../components/MainGoal.jsx";
import objetivos from "../data/objetivos.js";
import Login from "../components/Login.jsx";
import Discount from "../components/Discount.jsx";
import Delete from "../components/Delete.jsx";

export default function Others() {
  function alertHeySubmit() {
    alert("Atenção! Ainda falta documento para pagamento!");
  }
  return (
    <div>
      <h2>Página com o resto</h2>
      <FirstComponent />
      <h1>Front End Developer: React</h1>
      <CourseGoal {...courseGoal} />
      <Botao aoClicar={alertHeySubmit}>Submeter</Botao>
      <MainGoal objetivo={objetivos[0]} />
      <MainGoal objetivo={objetivos[1]} />
      <MainGoal objetivo={objetivos[2]} />
      <FirstComponent />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Login />
      <Discount />
      <Delete />
    </div>
  );
}
