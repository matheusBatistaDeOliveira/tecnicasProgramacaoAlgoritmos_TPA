var readlineSync = require('readline-sync');

let N1;

let N2;

N1 = Number(readlineSync.question("Digite o valor referente a N1: "))

N2 = Number(readlineSync.question("Digite o valor referente a N2: "))

let resultado1 = (N1 - N2) + 10;

console.log(resultado1);