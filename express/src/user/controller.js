const User=require("../bus_offer/model")

const postting=async(req,res)=>{
    try 
    {
        const data=req.body
        const details=await User.create(data)
        res.json(details)
    } 
    catch (error) 
    {
        res.json({Error:error.message})
    }
}

const getting=async(req,res)=>{
    try 
    {
       const {email}=req.body 
       const details=await User.find({email})
       res.json(details)
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