const User=require("../user/model")
const bcrypt=require("bcrypt")
const {v4}=require("uuid")
const auth=require("../auth/model")

const postting=async(req,res)=>{
    try 
    {
        const mailchecking=await User.findOne({ email: req.body.email })
        if(!mailchecking) return res.status(404).json({message:"data is found"})
        const[hashedPassword,generateId]=await Promise.all([bcrypt.hash(req.body.password,10),v4()])
        let user_information = {
            ...req.body,
            _id:generateId,
            password:hashedPassword,
        }

        let authData={
            name: req.body.CompanyName,
            email: req.body.email,
            password: hashedPassword,
            userId: generateId
        }
        let [createdata]=await Promise.all([
            User.create(user_information),
            auth.create(authData)
        ])
        res.json(createdata)
    }
    catch (error) 
    {
        res.status(500).json({ Error: error.message })
    }
}

const getting=async(req,res)=>{
    try 
    {
        const data=req.body
        const[mail_checking,password_checking]=await Promise.all(
        User.findOne({email:data.email}),
        bcrypt.compare(data.password,mail_checking.password))
        if(!mail_checking) return res.status(404).json({message:"mail is not existing"})
        if(!password_checking)  return res.status(404).json({message:"password is not existing"})
        res.json(mail_checking)       
    } 
    catch (error) 
    {
        res.json({Error:error.message})
    }
}

const update=async(req,res)=>{
    try 
    {
        const data=req.body
        const detail=await User.findOneAndUpdate({email:data.email},{ $set: new_data },{new:true})
        if(!detail) return res.status(404).json({message:"email not found"})
        res.json(detail)            
    } 
    catch (error) 
    {
        res.json({Error:error.message})
    }
}

const deleting=async(req,res)=>{
    try 
    {
      const {email}=req.body
      const checkmail=await User.findOne({email})
      if(!checkmail)return res.status(404).json({message:"data is not found"})
      let[delete_auth,delete_user]=await Promise.all([
       auth.findOneAndDelete(email),
       User.findOneAndDelete(email)  
     ])
     res.json("data deleted successfully")
    } 
    catch (error) 
    {
        res.json({Error:error.message})
    }
}

module.exports={postting,getting,update,deleting}