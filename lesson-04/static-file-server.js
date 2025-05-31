const http = require('http')
// const fs = require('fs/promises')

const fs = require('fs')


const staticFileServer = http.createServer(async (req, res) => {
    console.log('Server is running!')

    res.writeHead(200, {
        'Content-Type':'text/html',
    })

    const stream = fs.createReadStream("static/index.html")

    stream.pipe(res)

    // res.end(htmlContent)
})


staticFileServer.listen(3000)