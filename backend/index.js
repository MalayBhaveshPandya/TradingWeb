const express=require('express');
const app=express();
const port=3000;
const connectDB=require('./config/db.js');
const dotenv=require('dotenv');

dotenv.config();

app.get('/',(req,res)=>{
    res.send("This is home route");
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}!`);
})

connectDB();