import Botao from "./botao";

function CourseGoal({ titulo, descricao }) {
  function alertHeySend() {
    alert("Documento enviado!");
  }

  return (
    <div>
      <h2>TITLE: {titulo}</h2>
      <p>DESCRIPTION: {descricao}</p>
      <Botao aoClicar={alertHeySend}>Enviar</Botao>
    </div>
  );
}

export default CourseGoal;
