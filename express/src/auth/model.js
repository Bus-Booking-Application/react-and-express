const mongoose = require("mongoose")
const { v4 } = require("uuid")

const userSchema = new mongoose.Schema({
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
        enum: ['customer', 'travel', 'admin'],
        default: 'admin'
    },
    password: {
        type: String,
    },
    userId: {
        type: String
    }
},
    {
        timestamps: true
    });

const Auth = mongoose.model("auth", userSchema);
module.exports = Auth;

