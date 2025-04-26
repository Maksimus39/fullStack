const http = require('http')
const server = http.createServer((req, res) => {
    console.log('Server is running!')

    res.writeHead(200, {
      'Access-Control-Allow-Origin': 'http://localhost:63342'
    })
    res.end('Hello from backend!')
})


server.listen(3000)