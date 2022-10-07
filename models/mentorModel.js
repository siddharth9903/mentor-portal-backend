const mongoose = require("mongoose")


const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    photo: {
        type: String,
    },
    followers: {
        type: Number,
        required: true,
        default:0
    },
    langauge: {
        type: [String],
        required:true
    },
    experience: {
        typr: String,
        // required:true
    },
    industry: {
        type: String,
        required:true
    },
    domain: {
        type: [String],
        required:true
    },
    tools: {
        type: [String],
        required:true
    },
    district: {
        type: String,
        required:true
    },
    state: {
        type: String,
        required:true
    },
    intro: {
        type: String,
        required:true
    }

})
module.exports = mongoose.model('mentor', mentorSchema);
