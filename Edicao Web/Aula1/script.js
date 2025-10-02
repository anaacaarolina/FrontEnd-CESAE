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

let promptedName = prompt("Qual é o seu primeiro e último nome?");
alert(`Olá, ${promptedName}!`);
