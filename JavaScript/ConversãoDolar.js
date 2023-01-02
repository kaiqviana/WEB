let readlineSync = require('readline-sync');
let real = Number(readlineSync.question('Digite um número: '));
let ConvDol = real / 5.17
console.log(`Seus R$${real.toFixed(2)} reais equivalem a U$${ConvDol.toFixed(2)} doláres`)