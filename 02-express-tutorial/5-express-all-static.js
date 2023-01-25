
const express = require('express')
const path = require('path')

const app = express()

//set up static and middleware
app.use(express.static('./public'))

//app.get('/', (req,res) => {
//  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//SSR
//})

app.all('*', (req,res) => {
    res.status(404).send('resource not found')
})
app.listen(5001, () => {
    console.log('server is listenin on port 5001')
})



