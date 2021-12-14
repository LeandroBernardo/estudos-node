const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

//Configure express to get body
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const { title, pageqty } = req.body;

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
        }

        res.redirect('/')
    })

})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jesus#12!00',
    database: 'nodemysql'
})

conn.connect((err) => {
    if (err) {
        console.log(err)
    }

    console.log(`Banco conectado`)
    app.listen(3000)

})