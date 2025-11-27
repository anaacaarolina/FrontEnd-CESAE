function botaoMagico() {
  let botao = document.getElementById("botao-magico");

  if (botao.textContent == "Clique em mim!") {
    botao.textContent = "Clicou";
  } else {
    botao.textContent = "Clique em mim!";
  }
}

function mensagemPersonalizada() {
  let nome = prompt("Qual é o seu nome?");
  alert(`Olá, ${nome}!`);
}

function mudancaEstilo() {
  let paragrafo = document.getElementById("paragrafo-aumentar");
  let botaoMudancaEstilo = document.getElementById("mudanca-estilo");

  if (botaoMudancaEstilo.textContent == "Aumentar") {
    paragrafo.style.fontSize = "30px";
    botaoMudancaEstilo.textContent = "Diminuir";
  } else {
    botaoMudancaEstilo.textContent = "Aumentar";
    paragrafo.style.fontSize = "16px";
  }
}

function parOuImpar() {
  let numero = prompt("Insira um número");

  if (numero % 2 == 0) {
    alert("o numero é par");
  } else if (numero % 2 == 1) {
    alert("o numero é impar");
  } else {
    alert("caracter inválido");
  }
}

function contador() {
  for (i = 0; i <= 10; i++) {
    console.log(i);
  }
}

function listaDeCompras() {
  const listaCompras = [];
  let promptProduto = "";

  while (promptProduto !== "fim") {
    promptProduto = prompt("Escreva o nome de um produto: ");
    if (promptProduto == "fim") break;
    listaCompras.push(promptProduto);
  }
  if (listaCompras.length !== 0) {
    console.log("Lista de compras: " + listaCompras);
  }
}

function calculadoraSimples() {
  let num1 = Number(prompt("Insira um número: "));
  let num2 = Number(prompt("Insira outro número: "));
  let soma = num1 + num2;
  alert("A soma é: " + soma);
}

function inverterTexto() {
  let promptedString = prompt("Insira uma palavra:");
  let stringReversed = promptedString.split("").reverse().join("");
  alert(stringReversed);
}

function pessoa() {
  let pessoa = { nome: "carolina", idade: "22" };
  console.log(pessoa.nome);
  console.log(pessoa.idade);
}

function jogo() {
  let numeroEscolhido = Math.floor(Math.random() * 100);
  let promptedNumero = "";

  console.log(numeroEscolhido);
  do {
    promptedNumero = prompt("Insira um número");
    if (promptedNumero < numeroEscolhido) {
      alert("O número é maior");
    } else if (promptedNumero > numeroEscolhido) {
      alert("O número é menor");
    } else if (promptedNumero == numeroEscolhido) {
      alert("ACERTOU!");
      break;
    }
  } while (promptedNumero !== numeroEscolhido);
}
