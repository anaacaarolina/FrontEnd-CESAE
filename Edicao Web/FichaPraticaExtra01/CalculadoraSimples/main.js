let inputAtual = "";
let operacaoAtual = "";
let inputAnterior = "";

function adicionarNumero(number) {
  inputAtual += number;
  document.getElementById("display").value = `${inputAnterior}${operacaoAtual}${inputAtual}`;
}
function adicionarOperacao(operacao) {
  if (inputAtual === "") return;
  if (operacaoAtual !== "") {
    calcular();
  }
  operacaoAtual = operacao;
  inputAnterior = inputAtual;
  inputAtual = "";
  document.getElementById("display").value = `${inputAnterior}${operacaoAtual}${inputAtual}`;
}

function calcular() {
  let resultado = 0;

  const numero1 = parseFloat(inputAnterior);
  const numero2 = parseFloat(inputAtual);

  switch (operacaoAtual) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      if (numero2 === 0) {
        alert("Não é possível dividir por 0!");
        return;
      }
      resultado = numero1 / numero2;
      break;
    default:
      return;
  }

  inputAtual = resultado.toString();
  operacaoAtual = "";
  inputAnterior = "";
  document.getElementById("display").value = `${inputAnterior}${operacaoAtual}${inputAtual}`;
}

function limpar() {
  inputAtual = "";
  operacaoAtual = "";
  inputAnterior = "";
  document.getElementById("display").value = "";
}
