const jwt=require("jsonwebtoken")
const nodemailer=require("nodemailer")

const character="qwertyuioplkjhgfdsazxcvbnm1234567890"
const tokengeneration=(data)=>{
        return jwt.sign({data},character,{expiresIn:'2d'})
}


const sendmail=async()=>{
    try 
    {
        const transport=nodemailer.createTransport({
            service:"gmail",
            auth:
            {
                user:"",
                pass:""
            }
        })

        const fromtosend={
            from:"",
            to:email,
            sub:"sending mail",
            text:`Hii user this is your ${password}`
        }
        await transport.sendMail(fromtosend)

       
    } catch (error) {
        
    }
}



module.exports={tokengeneration,sendmail}