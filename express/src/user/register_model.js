const mongoose=require("mongoose")

const user=new mongoose.model({
    name:{
        type: String,
        require:True
    },
    email:{
        type:String,
        require:True
    },
    sex:{
        type:String
    },
    phone:{
        type:Number
    }
})
