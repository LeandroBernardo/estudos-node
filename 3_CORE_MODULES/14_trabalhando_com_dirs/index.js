const fs = require('fs');

if (!fs.existsSync('./minhapasta')) {
    console.log('Não existe')
    fs.mkdirSync('minhapasta') //Comando para criar a pasta
} else if (fs.existsSync('./minhapasta')) {
    console.log('Existe')
}

