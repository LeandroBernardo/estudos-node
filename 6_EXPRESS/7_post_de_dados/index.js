const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    console.log(`Estamos buscando o usuario ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.post('/users/save', (req, res) => {
    const { name, age } = req.body;
    console.log(name)
    console.log(age)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});




