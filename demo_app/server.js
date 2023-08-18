const http = require('http')
const port = 3000;

const app = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('Hello World')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
