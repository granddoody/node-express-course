const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.header("Authorization")
    if (!authHeader ||  !authHeader.startsWith('Bearer ')) {
        res.status(401).json({msg:`UNATHORIZED`})
    } 
    const token = authHeader.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            res.status(400).json({msg:`Invalid Token`})
        }

        const {id, username} = decoded
        req.user = {id, username}
        next()
    })
}

module.exports = authMiddleware 