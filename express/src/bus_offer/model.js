const mongoose=require("mongoose")

const busOfferSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    discountPercentage:{
        type:Number,
        required:true
    },
    validFrom:{
        type:Date,
        required:true
    },
    validTo:{
        type:Date,
        required:true
    },
    routes:{
        type:[String],
        required:true
    }
})

const BusOffer=mongoose.model("BusOffer",busOfferSchema)
module.exports=BusOffer