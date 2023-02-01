const express = require ('express')
const app = express()
const logger = require('./logger')


//req => middleware => res

//applies to relevant paths api/home/about/products
//app.use('/api', logger)
// applies to all paths 
app.use(logger)

app.get('/',logger,  (req,res) => {
    res.send('Home')
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.get('/api/products', logger, (req, res) => {
    res.send('Products')
})

app.get('/api/items', logger, (req, res) => {
    res.send('Items')
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001')
})