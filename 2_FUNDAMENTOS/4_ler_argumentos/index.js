// nome

console.log(process.argv);

const args = process.argv.slice(2);

console.log(args);

const nome = args[0].split('=')[1];
//node index.js nome=Leandro 
console.log(nome);

const idade = args[1].split('=')[1];
//node index.js nome=Leandro idade=37

console.log(idade);

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);