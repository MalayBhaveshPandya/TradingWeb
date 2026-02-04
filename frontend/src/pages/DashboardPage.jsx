import { useState } from "react";
import MarketWatch from "../components/MarketWatch";
import StockDetails from "../components/StockDetails";

const DashboardPage = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <MarketWatch onStockClick={(stock) => setSelectedStock(stock)} />
      <StockDetails stock={selectedStock} />
    </div>
  );
};

export default DashboardPage;
