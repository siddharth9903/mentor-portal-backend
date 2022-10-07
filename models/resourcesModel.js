const mongoose = require('mongoose')

const resources = new mongoose.Schema({
    
    name: {
        type: String,
        required:true
    },
    providerId: {
        type: String,
        required:true
    },
    provider: {
        type: String,
        required:true
    },
    tags: {
        type: [String],
        required:true
    },
    pdfLink: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('resources', resources);