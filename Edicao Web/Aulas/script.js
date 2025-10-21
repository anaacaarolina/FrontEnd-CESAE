// let myLuckNumber = 7;
// const myName = "Carolina";

// console.log("Nome: " + myName + "\nNúmero da sorte: " + myLuckNumber);

// while (myLuckNumber < 10) {
//   myLuckNumber++;
//   console.log("Número da sorte atualizado: " + myLuckNumber);
// }

// console.log(" ");

// let year = "1998";
// year = year + 1;
// console.log(year);

// const city = "Kiyoto";
// const country = "Japan";
// const combo = city + country;
// console.log(combo);

// const animal = "hippopotamus";
// console.log(animal[7]);

// let curso = "Front End";
// console.log(curso[5]);

// console.log(" ");

// const message = "            TASTE THE RAINBOW!     ";
// console.log(message);
// whisper = message.trim().toLowerCase();
// console.log(whisper);

// console.log(" ");

// const word = "skateboard";
// console.log(word);
// let subword = word.substring(5, 10);
// console.log(subword);
// let facialHair = subword.replace("o", "e");
// console.log(facialHair);

// console.log(" ");

// let promptedName = prompt("Qual é o seu primeiro e último nome?");
// alert(`Olá, ${promptedName}!`);

// let propmtedDia = prompt("Qual dia da semana é?");
// if (propmtedDia.toLowerCase() === "sexta") {
//   alert("Yay, sobrevivemos a mais uma semana!");
// } else {
//   alert("D:");
// }

// let promptedSenha = prompt("Digite a senha:");
// if (promptedSenha.length < 6) {
//   alert("A senha é inválida");
// }

// let promptedDia = prompt("Qual dia da semana é?");
// switch (promptedDia.toLowerCase()) {
//   case "segunda":
//     alert("Mais 5 dias para o fim de semana");
//     break;
//   case "terça":
//     alert("Mais 4 dias para o fim de semana");
//     break;
//   case "quarta":
//     alert("Mais 3 dias para o fim de semana");
//     break;
//   case "quinta":
//     alert("Mais 2 dias para o fim de semana");
//     break;
//   case "sexta":
//     alert("Yay, sobrevivemos a mais uma semana!");
//     break;
//   case "sábado":
//     alert("Finalmente, descanso merecido!");
//     break;
//   case "domingo":
//     alert(":( Amanhã é segunda-feira");
//     break;
//   default:
//     alert("Dia inválido");
//     break;
// }

// let planetas = ["Mercúrio", "Vénus", "Terra", "Mart", "Júpiter", "Saturno", "Urano", "Neptuno", "Plutão"];

// planetas[3] = "Marte";

// planetas.pop();
// console.log(planetas);

// planetas.unshift("Europa");
// console.log(planetas);

// const airplaneSeats = [
//   ["Ruth", "Anthony", "Stevie"],
//   ["Amelia", "Pedro", "Maya"],
//   ["Xavier", "Ananya", "Luis"],
//   ["Luke", null, "Deniz"],
//   ["Rin", "Sakura", "Francisco"],
// ];
// console.log(airplaneSeats);

// airplaneSeats[3][1] = "Carolina";

// console.log(airplaneSeats);

// let product = { nome: "Camisola", inStock: true, Price: 1.99, Colors: ["vermelho", "azul", "verde"] };

// console.log(product["Price"]);
// console.log(product.Colors[2]);

// product.Price = 2.55;

// console.log(product.Price);

// for (i = 0; i < 26; i++) {
//   console.log(i + 1 + " I Know");
// }
// for (i = 25; i >= 1; i -= 5) {
//   console.log(i);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (const pessoas of people) {
//   console.log(pessoas.toUpperCase());
// }

// const listaCompras = [];
// let promptProduto = "";

// while (promptProduto !== "fim") {
//   promptProduto = prompt("Escreva o nome de um produto: ");
//   if (promptProduto == "fim") break;
//   listaCompras.push(promptProduto);
// }
// if (listaCompras.length !== 0) {
//   console.log("Lista de compras: " + listaCompras);
// }

function printHeart() {
  console.log("<3");
}
function rant(message) {
  for (i = 0; i < 3; i++) {
    console.log(message.toUpperCase());
  }
}
function isSnakeEyes(num1, num2) {
  while (true) {
    num1 = prompt("Introduza um número: ");
    num2 = prompt("Introduza outro número: ");
    if (num1 == 1 && num2 == 1) {
      console.log("Yay, snake eyes");
      break;
    } else {
      console.log("Não são olhos de cobra");
    }
  }
}

const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = [];
for (const fullName of fullNames) {
  firstNames.push(fullName.first);
}
console.log(firstNames);

const lastNames = fullNames.map(function (f) {
  return f.last.toUpperCase();
});
console.log(lastNames);

const greet = (nome) => {
  console.log(`Olá ${nome}!`);
};

const soma = (x, y) => {
  return x + y;
};
console.log(soma(5, 5));
