const mongoose = require("mongoose")

const travel_schema = new mongoose.Schema({
    CompanyName: String,
    from: String,
    to: String,
    sector: {
        type: String,
        enum: ["government", "private"],
        default:"private"
    }
})