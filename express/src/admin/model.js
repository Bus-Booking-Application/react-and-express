const mongoose=require("mongoose")

const admin_schema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        
    }
})