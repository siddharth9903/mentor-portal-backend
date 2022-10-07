const mongoose = require('mongoose')
const MONGO_URI="mongodb+srv://YashParsana:YashParsana2003@cluster0.0v4ejyu.mongodb.net/?retryWrites=true&w=majority"

const connectDb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Db connected...");
}

module.exports = connectDb;