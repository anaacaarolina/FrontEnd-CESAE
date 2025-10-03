// Gere um número aleatório entre 0 e 1 usando Math.random().
// • Multiplique o valor por 100 para obter um número entre 0 e 100.
// • Use Math.floor() para arredondar o número para o inteiro mais próximo e exiba o resultado no console.
// Extra: Gere um número aleatório entre 1 e 10.

let numeroAleatorio = Math.random();
let numeroAleatorioAte100 = numeroAleatorio * 100;
let numeroArredondadoAte100 = Math.round(numeroAleatorioAte100);
let numeroAleatorioAte10 = Math.random() * 10;
let numeroArredondadoAte10 = Math.round(numeroAleatorioAte10);

console.log(`O número aleatório até 100 é ${numeroArredondadoAte100}. O número arredondado até 10 é ${numeroArredondadoAte10}`);
