const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const User = require('./models/User')

const app = express();

//Configure express to get body
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    let { name, occupation, newsletter } = req.body

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    await User.create({ name, occupation, newsletter })

    res.redirect('/')
})

app.get('/users/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({ raw: true, where: { id: id } })

    res.render('userview', { user })
})

app.get('/', async (req, res) => {
    const users = await User.findAll({ raw: true })

    res.render('home', { users })
})


conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })