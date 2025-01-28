const mongoose = require("mongoose")

const travel_schema = new mongoose.Schema({
    _id: {
        type: String
    },
    CompanyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    from: String,
    to: String,
    password: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        enum: ["government", "private"],
        default: "private"
    },
    role: {
        type: String
    }
});


// travel_schema.index({role:1, email: 1})
const travel = mongoose.model("travel", travel_schema)
module.exports = travel