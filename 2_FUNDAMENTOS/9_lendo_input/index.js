const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual a sua linguagem preferida? ', (language) => {
    console.log(`A linguagem ${language} é top demais! `)

    rl.close();
})