const User=require("../user/model")
const bcrypt=require("bcrypt")
const { default: mongoose } = require("mongoose")
const {v4}=require("uuid")

const postting=async(req,res)=>{
    try 
    {
        const mailchecking=await User.findOne({ email: req.body.email })
        if(!mailchecking) return res.status(404).json({message:"data is found"})
        const[hashedPassword,generateId]=await Promise.all([bcrypt.hash(req.body.password,10),v4()])
        let information = {
            ...req.body,
            _id:generateId,
            password:hashedPassword,
        }
        let [createdata]=await User.create(information)
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
        {email:data.email},
        bcrypt.compare(data.password,mailchecking.password))


    } 
    catch (error) 
    {
        res.json({Error:error.message})
    }
}

const update=async(req,res)=>{
    try 
    {
        const{email}=req.body
        const details=await User.findOneAndUpdate({email},{ new: true })
        if(!details)return res.status(404).json({message:"data is not found"})  
        res.json(details) 
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
        const details=await User.findOneAndDelete({email})
        if(!details)return res.status(404).json({message:"data is not found"})
        res.json(details)
    } 
    catch (error) 
    {
        res.json({Error:error.message})
    }
}

module.exports={postting,getting,update,deleting}