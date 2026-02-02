const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    stockId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Stock',
        required:true,
    },
    type:{
        type:String,
        enum:['BUY','SELL'],
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:['PENDING','EXECUTED','FAILED'],
        default:'EXECUTED',
    },
    targetPrice:{
        type:Number,
    }
},{
    timestamps:true,
});

module.exports=mongoose.model('Order',orderSchema);