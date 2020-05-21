const jwt = require('jsonwebtoken')
const config = require ('config')

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied.')
    try {
        const decoded = jwt.verify(token, config.get('jsw.secret'))
        req.user = decoded
        next();
    } catch (error) {
        console.log(error)
        res.status(400).send('Access denied.')
    }
}   


class Stack {
    constructor(){

    }
}