//Estrutura de repetição while
var readlineSync = require('readline-sync');
var cont = Number(readlineSync.question('Digite um numero: '))

//valor primário
console.log("Esse é o valor atual de cont: "+cont)

//Esse while diminui 10,9,8...
while(cont !== 0){
    console.log("Contagem de 10 a 0: " + cont )
    cont--
}
//Mostrará o novo valor de contador
console.log("Esse é o novo valor de cont: "+ cont)

//Esse while acrescenta 0,1,2...
while(cont <= 10){
    console.log("Contagem de 0 a 10: "+cont)
    cont++
}