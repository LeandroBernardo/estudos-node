const _ = require('lodash');
const chalk = require('chalk');

const log = console.log

const a = [1, 2, 3]
const b = [1, 5, 3]

const diff = _.difference(a, b)

log(chalk.blue('Diferença: ') + chalk.red(diff));