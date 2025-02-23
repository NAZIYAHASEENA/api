const mongoose=require("mongoose")
require("dotenv").config()

    const connectDB = async ()=>{
        try{
            await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MONGODB connection succss")
    }catch(error){
            console.log("MONGODB connection failed",error)
            process.exit(1)
    }}
module.exports = connectDB