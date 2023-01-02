let readlineSync = require('readline-sync');
let alt = Number(readlineSync.question('Digite a altura da casa: '));
let larg = Number(readlineSync.question('Digite a largura da casa: '));
let area = alt * larg;
let tinta = area / 2;
console.log(`A area da parede é de: ${area}`);
console.log(`O necessario de tinta para pintar a parede é de: ${tinta}`);