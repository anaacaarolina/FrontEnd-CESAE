import Botao from "./botao";

function CourseGoal({ titulo, descricao }) {
  return (
    <div>
      <h2>TITLE: {titulo}</h2>
      <p>DESCRIPTION: {descricao}</p>
      <Botao>Enviar</Botao>
    </div>
  );
}

export default CourseGoal;
