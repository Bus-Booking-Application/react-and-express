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
    },
    sex:{
        type:String
    },
    age: {
        type: Date,
        min: 18
    },
    
},
{
    timestamps:true
});

const User=mongoose.model("User",userSchema);
module.exports=User;

