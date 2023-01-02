let readlineSync = require('readline-sync');
let n1 = Number(readlineSync.question('Digite um valor: '));
let Antecessor = n1 - 1;
let Sucessor = n1 + 1;
console.log(`O antecessor de ${n1} é ${Antecessor}. Já o sucessor é ${Sucessor} `);
