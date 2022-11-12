const { body, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config/secretsConfig')


function validateUser(req, res, next) {
    
};

/* function fieldsValidation = {

}; */
  
function validationToken(req, res, next) {
    
    const { token } = req.cookies;

    if(!token){
        return res.redirect('/login');
    };

    try {
        const decoded = jwt.verify(token, jwtKey);
    } catch (error) {
        res.cookie('token',"");
        return res.redirect('/login');
    }
    
    next();
};

module.exports = {
   validateUser,
   fieldsValidation,
   validationToken,
};