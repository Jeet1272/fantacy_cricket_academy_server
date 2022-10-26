const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const data = require('./data/data.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/courses', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})