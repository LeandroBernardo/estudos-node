const chalk = require('chalk');
const inquirer = require('inquirer');

inquirer
    .prompt([
        { name: 'perg1', message: 'Qual o seu nome: ', },
        { name: 'perg2', message: 'Qual a sua idade? ' }
    ])
    .then((answers) => {
        console.log(chalk.bgYellow.black(`Nome: ${answers.perg1} e Idade: ${answers.perg2}`));
    })
    .catch((err) => {
        console.log(err)
    })

