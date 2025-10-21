//1. Função de Boas-Vindas
//Escreva uma função chamada boasVindas que:
// • Receba como parâmetro o nome de uma pessoa.
// • Retorne uma mensagem de boas-vindas personalizada na console
function boasVindas(nome) {
  nome = prompt("Introduza o seu nome: ");
  console.log(`Bem-vind@, ${nome}!`);
}

// 2. Verificador de Número Primo
// Escreva uma função chamada ehPrimo que:
// • Receba um número como parâmetro.
// • Retorne true se o número for primo ou false caso contrário.
// • Mostre o resultado na console.
function checkPrime(num) {
  num = prompt("Introduza um número para verificar se é primo: ");
  let isPrime = true;
  if (num === 1) {
    console.log("1 não é um número primo.");
  } else if (num > 1) {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} é um número primo.`);
    } else {
      console.log(`${num} não é um número primo.`);
    }
  }
}

// 3. Função para Converter Temperaturas
// Crie uma função chamada converterParaFahrenheit que:
// • Receba uma temperatura em Celsius.
// • Retorne a temperatura convertida para Fahrenheit.
// o Fórmula: C = (F - 32) * 5/9
function converterParaFahrenheit(graus) {
  graus = prompt("Introduza uma temperatura em Celsius: ");
  let fahrenheit = (graus * 9) / 5 + 32;
  console.log(`${graus}°C é igual a ${fahrenheit}°F`);
}

// 4. Gerador de Senhas Aleatórias
// Crie uma função chamada gerarSenha que:
// • Receba o tamanho desejado da senha como parâmetro.
// • Retorne uma senha aleatória contendo letras, números e caracteres especiais.
function gerarSenha(tamanho) {
  tamanho = prompt("Introduza o tamanho desejado da senha: ");
  const caracters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "&", "*"];

  for (i = 0, senha = ""; i < tamanho; i++) {
    senha += caracters[Math.floor(Math.random() * caracters.length)];
  }
  console.log(`Senha gerada: ${senha}`);
}

// 5. Contador de Vogais
// Escreva uma função chamada contarVogais que:
// • Receba uma string como parâmetro.
// • Retorne o número de vogais na string (a, e, i, o, u).
// • Imprima na consola
function contarVogais(frase) {
  frase = prompt("Introduza uma frase: ");
  let counter = 0;
  for (let i = 0; i < frase.length; i++) {
    if ("aeiouAEIOU".includes(frase[i])) {
      counter++;
    }
  }
  console.log(`Número de vogais na frase: ${counter}`);
}

// 6. Calculadora Básica
// Crie uma função chamada calculadora que:
// • Receba três parâmetros: dois números e uma operação (soma, subtração, multiplicação ou divisão).
// • Retorne o resultado da operação.
// • Imprima na consola
function calculadora(num1, num2, operacao) {
  num1 = parseFloat(prompt("Introduza o primeiro número: "));
  num2 = parseFloat(prompt("Introduza o segundo número: "));
  operacao = prompt("Introduza a operação (soma, subtração, multiplicação ou divisão): ");
  let resultado = 0;
  if (operacao === "soma") {
    resultado = num1 + num2;
  }
  if (operacao === "subtração") {
    resultado = num1 - num2;
  }
  if (operacao === "multiplicação") {
    resultado = num1 * num2;
  }
  if (operacao === "divisão") {
    resultado = num1 / num2;
  }
  console.log(`O resultado da ${operacao} dos números ${num1} e ${num2} é: ${resultado}`);
}

// 7. Função para Reverter Strings
// Escreva uma função chamada reverterString que:
// • Receba uma string como parâmetro.
// • Retorne a string invertida.
// • Métodos: split(); reverse(); join();
function reverterString(frase) {
  frase = prompt("Introduza uma frase: ");
  let fraseInvertida = frase.split("").reverse().join("");

  console.log(`Frase invertida: ${fraseInvertida}`);
}

// 8. Validador de Palíndromos
// Crie uma função chamada ehPalindromo que:
// • Receba uma palavra como parâmetro.
// • Retorne true se a palavra for um palíndromo (lê-se igual de trás para frente) ou false caso contrário.
// • Imprima na consola

function isPalindrome(palavra) {
  palavra = prompt("Introduza uma palavra: ");
  let reversedWord = palavra.split("").reverse().join("");
  if (palavra.toLowerCase() === reversedWord.toLowerCase()) {
    console.log(`${palavra} é um palíndromo.`);
  } else {
    console.log(`${palavra} não é um palíndromo.`);
  }
}

// 9. Média de Números em um Array
// Escreva uma função chamada calcularMediaArray que:
// • Receba um array de números como parâmetro.
// • Retorne a média dos números no array.
function calcularMediaArray(conjunto) {
  conjunto = prompt("Introduza números separados por vírgula: ");
  let splitArray = conjunto.split(",");
  let numeros = [];
  for (let i = 0; i < splitArray.length; i++) {
    numeros.push(Number(splitArray[i]));
  }
  let soma = 0;
  for (i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  media = soma / numeros.length;
  console.log(`A média dos números introduzidos é: ${media}`);
}

// 10. Função de Contagem Regressiva
// Crie uma função chamada contagemRegressiva que:
// • Receba um número como parâmetro.
// • Exiba uma contagem regressiva no console até chegar a 0.
// • Imprima na consola
function contagemRegressiva(num) {
  num = parseInt(prompt("Introduza um número para começar a contagem decrescente: "));
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
