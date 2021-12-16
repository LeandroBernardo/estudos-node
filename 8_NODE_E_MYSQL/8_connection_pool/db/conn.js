const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Jesus#12!00',
    database: 'nodemysql'
})

module.exports = pool