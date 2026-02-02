const Stock=require("../models/Stock.js");

const getStocks=async(req,res)=>{
    try{
        const stocks=await Stock.find({});
        res.json(stocks);
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}

const getStockById=async(req,res)=>{
    try{
        const stock=await Stock.findById(req.params.id);
        if(stock) res.json(stock);
        else res.status(404).json({
            message:"Stock not found:("
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}

module.exports={getStocks,getStockById};