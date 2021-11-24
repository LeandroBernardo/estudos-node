const inquirer = require('inquirer');

inquirer
    .prompt([{
        name: 'perg1',
        message: 'Qual sua primeira nota'
    },
    {
        name: 'perg2',
        message: 'Qual sua segunda nota'
    }
    ])
    .then((answers) => {
        const nota1 = parseInt(answers.perg1);
        const nota2 = parseInt(answers.perg2);
        const media = (nota1 + nota2) / 2;
        console.log(`A média entre as notas ${nota1} e ${nota2} é ${media}`)
    })
    .catch((err) => { console.log(err) });



