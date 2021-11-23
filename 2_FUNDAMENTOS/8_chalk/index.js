const chalk = require('chalk');

const nota = 6;

if (nota >= 7) {
    console.log(chalk.bgGreen.black(`Sua nota é ${nota} você passou`))
} else {
    console.log(chalk.bgRed.black(`Sua nota ${nota} é insuficiente para passar`))
};