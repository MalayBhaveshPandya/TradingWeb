const express=require('express');
const app=express();
const port=3000;
const connectDB=require('./config/db.js');
const dotenv=require('dotenv');
const stockRoutes=require("./routes/stockRoutes.js");
const cors=require("cors");

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use(express.json());

dotenv.config();
connectDB();

app.get('/',(req,res)=>{
    res.send("This is home route");
})

app.use('/api/stocks',stockRoutes);

app.listen(port,()=>{
    console.log(`Listening on port ${port}!`);
})

