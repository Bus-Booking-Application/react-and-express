const mongoose = require("mongoose")
const { v4 } = require("uuid")

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: 'customer'
    },
    password: {
        type: String,
    },
    phone: {
        type: Number,
        require: true
    },
    gender: {
        type: String
    },
    age: {
        type: Number,
        min: 18
    },

},
    {
        timestamps: true
    });

const User = mongoose.model("User", userSchema);
module.exports = User;

