require("dotenv").config();
const jwt= require("jsonwebtoken");



//YEH JWT TOKEN CREATE KRTA HAI
module.exports.createSecretToken =(id)=>{
    return jwt.sign({id},process.env.TOKEN_KEY,{
        expiresIn: 3 * 24 * 60 * 60,
    });
}


