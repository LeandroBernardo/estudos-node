const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    console.log(`Estamos buscando o usuario ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

router.post('/save', (req, res) => {
    const { name, age } = req.body;
    console.log(name)
    console.log(age)
})

module.exports = router
