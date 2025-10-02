// Com a variável let numero  = 7.56789
// • Arredonde o número para o inteiro mais próximo.
// • Arredonde o número para baixo.
// • Arredonde o número para cima.
// Extra: Mostre todos os resultados em uma única frase usando template literals

let numero = 7.56789;

let arredondadoProximo = Math.round(numero);
let arredondadoBaixo = Math.floor(numero);
let arredondadoCima = Math.ceil(numero);

console.log(`O número 7.56789 arredondado para o inteiro mais próximo é ${arredondadoProximo}, arredondado para baixo é ${arredondadoBaixo}, e arredondado para cima é ${arredondadoCima}.`);
