const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const user = {
    name: 'Leandro Bernardo',
    surname: 'dos Santos'
}

const auth = true

app.get('/dashboard', (req, res) => {

    const items = ["Item a", "Item b", "Item c", "Item d", "Item e"]

    res.render('dashboard', { items })
})

app.get('/', (req, res) => {
    res.render('home', { user, auth })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})