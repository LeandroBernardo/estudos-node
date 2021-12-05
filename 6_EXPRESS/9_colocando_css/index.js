const express = require('express');
const app = express();
const path = require('path');
//import router
const users = require('./users');

const port = 3000;

app.use(express.urlencoded({ extended: true, }))

app.use(express.json())

//arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', users);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});




