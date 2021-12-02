const inquirer = require('inquirer');
const chalk = require('chalk');

const fs = require('fs');

const log = console.log;
const info = console.info;

operation()

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair',],
    }
    ])
        .then((answer) => {
            const action = answer['action']

            switch (action) {
                case 'Criar Conta':
                    createAccount();
                    break;
                case 'Consultar Saldo':
                    getAccountBalance();
                    break;
                case 'Depositar':
                    deposit();
                    break;
                case 'Sacar':
                    log('Sacar')
                    withdraw();
                    break;
                case 'Sair':
                    log(chalk.bgBlue.black(`Obrigado por usar o Accounts!`))
                    process.exit()
                    break;
                default:
                    log('Opção inválida')
            }
        })
        .catch((err) => console.log(err))
}

//create an account 
function createAccount() {
    log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    log(chalk.green('Defina as opções da sua conta a seguir'))

    buildAccount()
}

function buildAccount() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um nome para sua conta: '
    }
    ])
        .then(answer => {
            const accountName = answer['accountName']
            info(accountName)

            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts')
            }

            if (fs.existsSync(`accounts/${accountName}.json`)) {
                log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
                buildAccount()
                return
            }

            fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (err) => {
                log(err)
            })

            log(chalk.green('Parabéns, a sua conta foi criada!'))
            operation()
        })
        .catch(err => console.log(err))
}

//add an amount to user account
function deposit() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }
    ])
        .then((answer) => {
            const accountName = answer['accountName']

            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer.prompt([{
                name: 'amount',
                message: 'Quanto você deseja depositar?'
            }
            ])
                .then((answer) => {
                    const amount = answer['amount']

                    //add amount
                    addAmount(accountName, amount)
                    operation()

                })
                .catch(err => log(err));
        })
        .catch(err => log(err))
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        log(chalk.bgRed.black(`A conta ${accountName} não existe. Tente novamente!`))
        return false
    }
    return true

}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        log(chalk.bgRed.black(`Ocorreu um erro tente mais tarde`))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => log(err))

    log(chalk.green(`Foi depositado o valor de R$ ${amount}`))
}

function getAccount(accountName) {
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJson)
}

//show account balance

function getAccountBalance() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }
    ])
        .then((answer) => {
            const accountName = answer['accountName']

            if (!checkAccount(accountName)) {
                return getAccountBalance()
            }

            const accountData = getAccount(accountName)

            log(chalk.bgBlue.black(`Seu saldo na conta é de: RS ${accountData.balance}`))

            operation()
        })
        .catch(err => console.log(err))
}

//withdraw an amount from user account

function withdraw() {

    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }
    ])
        .then((answer) => {
            const accountName = answer['accountName']

            if (!checkAccount(accountName)) {
                return withdraw()
            }

            inquirer.prompt([{
                name: 'amount',
                message: 'Quanto você deseja sacar?'
            }
            ])
                .then((answer) => {
                    const amount = answer['amount']

                    removeAmount(accountName, amount)
                })
                .catch(error => log(err))
        })
        .catch(err => console.log(err))

}

function removeAmount(accountName, amount) {

    const accountData = getAccount(accountName)

    if (!amount) {
        log(chalk.bgRed.black(`Ocorreu um erro tente novamente mais tarde`))
        return withdraw()
    }

    if (accountData.balance < amount) {
        log(chalk.bgRed.black('Saldo insuficiente para realizar o saque'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), err => log(err))

    log(chalk.green(`Saque de R$ ${amount} realizado`))
    operation()

}