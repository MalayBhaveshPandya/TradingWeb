const mongoose=require("mongoose");

const stockSchema=new mongoose.Schema({
    symbol:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    secctor:{
        type:String,
    },
    changePercent:{
        type:Number,
        default:0,
    }
},{
    timestamps:true,
});

module.exports=mongoose.model('Stock',stockSchema);