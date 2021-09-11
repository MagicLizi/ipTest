const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // console.log(req.header('x-forward-for'))
    // console.log(req.ip)
    // console.log(req.connection.remoteAddress)
    // console.log(req)
    res.send(JSON.stringify({
        headers:req.headers,
        ip:req.ip,
        remote:req.connection.remoteAddress
    }))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})