// Dada a lista de números let numeros = [45,12,78,4,90]
// • Encontrar o maior número na lista.
// • Encontrar o menor número.
// • Exiba os resultados no console em uma frase usando template literals:

let numeros = [45, 12, 78, 4, 90];

let maiorNumero = Math.max(...numeros);
let menorNumero = Math.min(...numeros);
console.log(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}.`);
