const express = require ('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')



//req => middleware => res

//applies to relevant paths api/home/about/products
//app.use('/api', logger)

// applies to all paths 
//app.use([logger,authorize]) //console.logs in order 

app.use(morgan('tiny'))

app.get('/',logger,  (req,res) => {
    res.send('Home')
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.get('/api/products', logger, (req, res) => {
    res.send('Products')
})

app.get('/api/items', [logger, authorize], (req, res) => {
console.log(req.user)
    res.send('Items')
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001')
})