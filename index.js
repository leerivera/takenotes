const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Homepage!')
})

app.get('/login', (req, res) => {
    res.send('login!')
})

app.get('/signup', (req, res) => {
    res.send('sign up!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})