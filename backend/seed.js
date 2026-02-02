const dotenv=require('dotenv');
const connectDB=require('./config/db.js');
const  Stock=require('./models/Stock.js');

dotenv.config();

const stocks = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2500, sector: 'Energy' },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3400, sector: 'IT' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1600, sector: 'Finance' },
  { symbol: 'INFY', name: 'Infosys', price: 1450, sector: 'IT' },
  { symbol: 'ICICIBANK', name: 'ICICI Bank', price: 950, sector: 'Finance' },
  { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', price: 2600, sector: 'Consumer Goods' },
  { symbol: 'ITC', name: 'ITC Limited', price: 440, sector: 'Consumer Goods' },
  { symbol: 'SBIN', name: 'State Bank of India', price: 580, sector: 'Finance' },
  { symbol: 'BHARTIARTL', name: 'Bharti Airtel', price: 880, sector: 'Telecom' },
  { symbol: 'LICI', name: 'LIC India', price: 650, sector: 'Insurance' },
  { symbol: 'TATAMOTORS', name: 'Tata Motors', price: 620, sector: 'Auto' },
  { symbol: 'MARUTI', name: 'Maruti Suzuki', price: 9500, sector: 'Auto' },
  { symbol: 'SUNPHARMA', name: 'Sun Pharma', price: 1100, sector: 'Pharma' },
  { symbol: 'ASIANPAINT', name: 'Asian Paints', price: 3200, sector: 'Consumer Goods' },
  { symbol: 'TITAN', name: 'Titan Company', price: 2900, sector: 'Consumer Goods' },
  { symbol: 'AXISBANK', name: 'Axis Bank', price: 980, sector: 'Finance' },
  { symbol: 'WIPRO', name: 'Wipro', price: 400, sector: 'IT' },
  { symbol: 'ULTRACEMCO', name: 'UltraTech Cement', price: 8200, sector: 'Cement' },
  { symbol: 'POWERGRID', name: 'Power Grid Corp', price: 240, sector: 'Energy' },
  { symbol: 'BAJFINANCE', name: 'Bajaj Finance', price: 7100, sector: 'Finance' },
];

const importData=async()=>{
    try{
        connectDB();
        await Stock.deleteMany();
        await Stock.insertMany(stocks);
    }catch(err){
        console.log(`Error`,err.message);
    }
};

importData();