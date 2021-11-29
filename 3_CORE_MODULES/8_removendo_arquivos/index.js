//Criar o arquivo.txt no diretório para testar a remoção

const fs = require('fs');

const data = 'Criando o arquivo.txt e em seguida deletando'

setTimeout(() => {
    fs.writeFile('arquivo.txt', data, (err) => {
        if (err) {
            console.log(err.message)
            return
        }
        console.log('arquivo.txt criado com sucesso')
    });
}, 1000)

setTimeout(() => {
    fs.unlink('arquivo.txt', (err) => {
        if (err) {
            console.log(err.message)
            return
        }

        console.log('arquivo.txt removido com sucesso')
    });
}, 2000)



