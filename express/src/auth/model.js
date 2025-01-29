const mongoose = require("mongoose")

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
        enum: ['travel', 'admin'],
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

