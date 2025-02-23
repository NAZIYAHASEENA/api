const express = require('express');
const User=require("./model/user")
//express library
require("dotenv").config()
const connectDB=require("./config/db")
connectDB()
const PORT =3020
const app=express();
app.use(express.json());
//use middleware handling some of the functions

//json file into express

app.get('/',(req,res)=> {
    res.send("Hello from Express CRUD API")
})


app.post("/api/user/add",(req,res)=>{
    const { name,email,age,password }=req.body
    const user=new User({
        name,
        email,
        age,
        password,
    })
})
//route for sending response 
//send status(errors like 404->NOT FOUND ,200 ->OK,500,503..)

app.listen(PORT,()=>{
    console.log("Server is running on port " +PORT)
})