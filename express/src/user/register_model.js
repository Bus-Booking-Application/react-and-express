const mongoose=require("mongoose")
const {v4}=require("uuid")

const userSchema=new mongoose.Schema({
    _id:{
        type:String,
        default: v4
       },
    name:{
        type: String,
        require:True
    },
    email:{
        type:String,
        require:True
    },
    password:{
        type:String,
    },
    phone:{
        type:Number
    }
})