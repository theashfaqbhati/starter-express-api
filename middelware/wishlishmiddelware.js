const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const wishlish = require('../models/wishlishmodel')

const protect = asyncHandler(async (req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded);
            // Get user from the token
            req.user = decoded.id
            next()
        }
        catch (error) {
            console.log(error);
            res.status(401)
            res.send('Not authorized')
        }
    }
    if(!token) {
        res.status(401)
        res.send('')
        res.send('not authorized token')
    }
})

module.exports = protect