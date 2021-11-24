// A estrutura try catch oferece um tratamento de erro mais amigável ao usuário

const x = 10;

//Tentando atribuir um novo valor para uma constante
try {
    x = 2
} catch (error) {
    console.log(`Erro: ${error}`)
};

