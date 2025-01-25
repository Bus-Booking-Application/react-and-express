const mongoose=require("mongoose")
const login_scheme=new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const login_table=mongoose.model("login",login_scheme)

module.exports=login_table