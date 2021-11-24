const fs = require('fs');

console.log('Inicio')

fs.writeFile('arquivo.txt', 'Hello World Async', function (err) {
    setTimeout(function () {
        console.log('Arquivo criado')
    }, 2000);
})

console.log('Fim')