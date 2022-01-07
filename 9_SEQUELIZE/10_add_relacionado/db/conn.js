const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'Jesus#12!00', {
    host: 'localhost',
    dialect: 'mysql'
})

// try {
//     sequelize.authenticate()
//     console.log('Conectamos com sucesso o Sequelize')
// } catch (err) {
//     console.log('Não foi possível conectar:', err)

// }

module.exports = sequelize