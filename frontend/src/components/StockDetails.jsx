import React from "react";

const StockDetails = ({ stock }) => {
  if (!stock)
    return (
      <div>
        <h2>Welcome to TradingWeb</h2>
        <p>Select a stock from the left sidebar to see details.</p>
      </div>
    );
  return (
    <div className="flex-1 bg-white p-8 font-sans h-screen overflow-y-auto">
      <div className="flex justify-between items-start border-b border-gray-200 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{stock.symbol}</h1>
          <p className="text-gray-500 text-sm mt-1">{stock.name}</p>
          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mt-2">
            {stock.sector}
          </span>
        </div>
        <div className="text-right">
          <div
            className={`text-3xl font-bold ${stock.changePercent >= 0 ? "text-green-600" : "text-red-500"}`}
          >
            ₹{stock.price.toFixed(2)}
          </div>
          <p className="text-sm text-gray-500 mt-1">Last Traded Price</p>
        </div>
      </div>
      <div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors shadow-lg font-semibold w-32">
          BUY
        </button>
        <button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors shadow-lg font-semibold w-32">
          SELL
        </button>
      </div>
      <div>{/* Stock Chart for {stock.symbol} will go here */}</div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="p-4 bg-white border border-gray-200 rounded">
          <p className="text-xs text-gray-500">Open</p>
          <p className="font-bold">₹{(stock.price * 0.99).toFixed(2)}</p>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded">
          <p className="text-xs text-gray-500">High</p>
          <p className="font-bold">₹{(stock.price * 1.02).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
