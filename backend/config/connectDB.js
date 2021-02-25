const mongoose = require("mongoose");
require ("dotenv").config({ path: "./config/.env"});

const connectDB = async() => {
    const opt ={useNewUrlParser:true,useUnifiedTopology: true,    useCreateIndex: true
        ,dbName: "testFront"}
    try{
       await mongoose.connect(process.env.MONGO_URL, opt);
       console.log("Database is connected");
    }  
    catch (error){
        console.log(error)         
    }
}

module.exports = connectDB;