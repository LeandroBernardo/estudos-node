const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const user = {
    name: 'Leandro Bernardo',
    surname: 'dos Santos'
}

const auth = true

app.get('/dashboard', (req, res) => {
    const items = ["Item a", "Item b", "Item c", "Item d", "Item e"]
    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Artigo contendo os primeiros passos para aprender Node.js',
        comments: 12
    }
    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'Javascript',
            body: 'Artigo contendo os primeiros passos para aprender Node.js',
            comments: 12
        },
        {
            title: 'Aprender Java',
            category: 'Java',
            body: 'Artigo contendo os primeiros passos para aprender Spring',
            comments: 65
        },
        {
            title: 'Aprender Corte e Costura',
            category: 'Trabalhos manuais',
            body: 'Artigo contendo os primeiros passos para aprender a costurar',
            comments: 12568
        }
    ]

    res.render('blog', { posts })
})


app.get('/', (req, res) => {
    res.render('home', { user, auth })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})