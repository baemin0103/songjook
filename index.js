const express = require('express')
const app = express()

app.use('/public', express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(8080);