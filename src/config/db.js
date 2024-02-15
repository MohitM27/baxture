const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect("mongodb://localhost:27017/file_analysis") 
        console.log('Mongo connected')
    } catch(error) {
        console.log("Mongo Error :: ",error)
        process.exit()
    }
}

module.exports = connectDB