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
        enum: ['customer', 'travels', 'admin'],
        default: 'admin'
    },
    password: {
        type: String,
    },
    profile: {
        type: String
    }
},
    {
        timestamps: true
    });

const User = mongoose.model("User", userSchema);
module.exports = User;

