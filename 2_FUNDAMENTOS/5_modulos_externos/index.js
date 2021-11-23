const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
//node index.js --nome=Leandro
console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];
//node index.js --nome=Leandro --profissao=Desenvolvedor
console.log(nome, profissao);

console.log(`Meu nome é ${nome} e minha profissao é ${profissao}`)
