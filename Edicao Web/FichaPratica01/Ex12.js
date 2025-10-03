// Com a string "JavaScript é incrível!":
// • Conte quantas vezes a letra "i" aparece na frase.

let frase = "JavaScript é incrivel";

let countArray = frase.match(/i/g) || [].length;
let count = countArray.length;

console.log(count);
