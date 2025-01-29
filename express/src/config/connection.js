const mongoose=require("mongoose")

const connection=()=>{
    try {
        mongoose.connect("mongodb+srv://Roshan:1234567890@cluster0.zst9e.mongodb.net/booking")
        console.log("Database is connected.....");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports=connection