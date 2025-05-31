const http = require('http')


const staticFileServer = http.createServer(async (req, res) => {
    console.log('Server is running!')

    res.writeHead(200, {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    })

    const jsonString = JSON.stringify([
        {id: 1, driver: 'Alice', carModel: 'Toyota Prius'},
        {id: 2, driver: 'Bob', carModel: 'Honda  Civic'},
        {id: 3, driver: 'Charlie', carModel: 'Tesla  Model 3'}
    ])

    res.end(jsonString)
})


staticFileServer.listen(3001)