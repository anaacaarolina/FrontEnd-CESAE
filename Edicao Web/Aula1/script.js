let myLuckNumber = 7;
const myName = "Carolina";

console.log("Nome: " + myName + "\nNúmero da sorte: " + myLuckNumber);

while (myLuckNumber < 10) {
  myLuckNumber++;
  console.log("Número da sorte atualizado: " + myLuckNumber);
}

console.log(" ");

let year = "1998";
year = year + 1;
console.log(year);

const city = "Kiyoto";
const country = "Japan";
const combo = city + country;
console.log(combo);

const animal = "hippopotamus";
console.log(animal[7]);

let curso = "Front End";
console.log(curso[5]);

console.log(" ");

const message = "            TASTE THE RAINBOW!     ";
console.log(message);
whisper = message.trim().toLowerCase();
console.log(whisper);

console.log(" ");

const word = "skateboard";
console.log(word);
let subword = word.substring(5, 10);
console.log(subword);
let facialHair = subword.replace("o", "e");
console.log(facialHair);

console.log(" ");

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

// let planetasCorrigido = planetas.splice(3, 1, "Marte");

// console.log(planetasCorrigido);
// console.log(planetas);

// let planetasSemPlutao = planetas.pop();
// console.log(planetas);

// let planetasNovo = planetas.push("Europa");
// console.log(planetas);

// const airplaneSeats = [
//   ["Ruth", "Anthony", "Stevie"],
//   ["Amelia", "Pedro", "Maya"],
//   ["Xavier", "Ananya", "Luis"],
//   ["Luke", null, "Deniz"],
//   ["Rin", "Sakura", "Francisco"],
// ];

// let lugaresCorrigidos = airplaneSeats[3].splice(1, 1, "Carolina");
// console.log(airplaneSeats[0]);
// console.log(airplaneSeats[1]);
// console.log(airplaneSeats[2]);
// console.log(airplaneSeats[3]);
// console.log(airplaneSeats[4]);

// const product = { nome: "Camisola", inStock: true, Price: 2.55, Colors: ["vermelho", "azul", "verde"] };

// console.log(product["Price"]);
// console.log(product.Colors[2]);

for (i = 0; i < 26; i++) {
  console.log("I Know");
}
for (i = 25; i >= 1; i -= 5) {
  console.log(i);
}
