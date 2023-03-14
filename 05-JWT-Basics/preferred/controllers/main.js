const jwt = require('jsonwebtoken')

const logon = async (req, res) => {
    const {username, password} = req.body

    if(!username || !password){
        res.status(400).json({msg:`please enter email or password `})
    }

    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {
        expiresIn: "24h",
    }, 
    (err, token) => 
    {
    res.status(200).json({token})}
    )
}


const hello = async (req, res) => {
    res.status(200).json(`Hello ${req.user.username}`)

}


module.exports = {
    logon, 
    hello,}