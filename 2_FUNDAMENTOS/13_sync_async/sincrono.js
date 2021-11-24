const fs = require('fs');

console.log('Início');

fs.writeFileSync('arquivo.txt', 'Hello World');

console.log('Fim');