let readlineSync = require('readline-sync');
let num = readlineSync.question('Digite um número: ');
let dobro = num * 2;
let terçaPart = num / 3;
console.log(`O dobro de ${num} é ${dobro}. Já a terça parte é ${terçaPart.toFixed(2)}`)

