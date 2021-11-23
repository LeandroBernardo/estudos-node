const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
//node index.js --nome=Leandro

const soma = require('./soma').soma

const valor1 = args['valor1']
const valor2 = args['valor2']
// node index.js --valor1=10 --valor2=30

const valorSomado = soma(valor1, valor2)

console.log(`A soma entre ${valor1} e ${valor2} é igual a ${valorSomado}`);
