var readlineSync = require('readline-sync')
var MesAno = readlineSync.question('Digite o mês do ano para saber a estação: ')
switch (MesAno.toUpperCase()){
    case "JANEIRO":
        console.log('Primavera')
    break;
    case "FEVEREIRO":
        console.log('Primavera')
    break;
    case "MARÇO":
        console.log('Primavera')
    break;
    case "ABRIL":
        console.log('Outono')
    break;
    case "MAIO":
        console.log('Outono')
    break;
    case "JUNHO":
        console.log('Verão')
    break;
    case "JULHO":
        console.log('Verão')
    break;
    default:
        console.log('Esse mês não exite')
}