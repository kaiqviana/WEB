let readlineSync = require('readline-sync');
let A = Number(readlineSync.question('A = '));
let B = Number(readlineSync.question('B = '));
let C = Number(readlineSync.question('C = '));
let delta = B**2 - 4 * A * C
console.log(`O valor de DELTA é ${delta}`)
