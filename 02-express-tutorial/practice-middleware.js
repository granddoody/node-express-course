const consoleLog = (req,res,next) => {
    console.log('Hi, this is a middleware function!')
    next()
}

module.exports = consoleLog