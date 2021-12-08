const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000

const app = express()


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const user = {
    name: 'Leandro',
    surname: 'dos Santos'
}

const mensagem = 'Seu lugar é aqui'

app.get('/', (req, res) => {
    res.render('home', { user: user, mensagem })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})