const mongoose  = require("mongoose");

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB);
    console.log(`Mongodb working`)
}

module.exports = connectDB;