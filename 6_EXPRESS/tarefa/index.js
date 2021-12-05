const express = require('express')
const app = express();
const path = require('path');
const products = require('./products');

const port = 5000;
//arquivos estáticos
app.use(express.static('public'))

//templates html
const basePath = path.join(__dirname, 'templates')

app.use('/products', products);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})


app.listen(5000, () => {
    console.log(`Server listening on port ${port}`)
})