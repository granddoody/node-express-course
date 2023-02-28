const express = require('express')
const path = require('path')
const app = express()

const consoleLog = require('./practice-middleware')

app.use(consoleLog) 

app.get('/', consoleLog, (req, res) => {
    res.sendFile(path.resolve(__dirname, './new-public/index.html'))
  })

app.get('/sample', consoleLog, (req, res) => {
    res.status(200).send('This is working')
} )

app.listen(3000, () => {
    console.log('server is listening on port 3000...')
})