const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3333;

const server = http.createServer((req, res) => {
    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    if (!name) {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        const nameWithNewLine = name + '\r\n'

        fs.appendFile("arquivo.txt", nameWithNewLine, (err, data) => {
            res.writeHead(302, {
                Location: '/'
            })
            return res.end()
        })
    }

})


server.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})