const jwt=require("jsonwebtoken")
const nodemailer=require("nodemailer")

const character="qwertyuioplkjhgfdsazxcvbnm1234567890"
const tokengeneration=(data)=>{
        return jwt.sign({data},character,{expiresIn:'2d'})
}

module.exports={tokengeneration}