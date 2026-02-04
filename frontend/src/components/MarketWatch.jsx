import { useEffect, useState } from "react";
import API from "../services/api";

const MarketWatch = ({ onStockClick }) => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. New State for Search
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const { data } = await API.get("/stocks");
        if (Array.isArray(data)) {
          setStocks(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStocks();
  }, []);

  // 2. The Filter Logic (Runs automatically on every render)
  const filteredStocks = stocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading)
    return <div className="p-4 text-xs text-gray-500">Loading...</div>;

  return (
    <div className="w-80 h-screen bg-white border-r border-gray-200 flex flex-col font-sans">
      {/* Header & Search */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <input
          type="text"
          id="stockSearch"
          name="stockSearch"
          autoComplete="off"
          placeholder="Search e.g. INFY, TCS"
          className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          {/* Show count of FILTERED results */}
          <span>
            {filteredStocks.length} / {stocks.length} Stocks
          </span>
        </div>
      </div>

      {/* Stock List - Scrollable Area */}
      <ul className="overflow-y-auto flex-1">
        {filteredStocks.length === 0 ? (
          <li className="p-4 text-gray-400 text-sm text-center">
            No stocks match "{searchTerm}"
          </li>
        ) : (
          // 4. Map through FILTERED stocks, not all stocks
          filteredStocks.map((stock) => (
            <li
              key={stock._id}
              onClick={() => onStockClick(stock)}
              className="flex justify-between items-center p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer group transition-colors"
            >
              {/* Left: Symbol */}
              <div>
                <div
                  className={`text-sm font-medium ${stock.changePercent < 0 ? "text-red-500" : "text-gray-700"}`}
                >
                  {stock.symbol}
                </div>
                <div className="text-[10px] text-gray-400 truncate w-24">
                  {stock.name}
                  {/* Showing Company Name for better search context */}
                </div>
              </div>

              {/* Right: Price */}
              <div className="text-right">
                <div
                  className={`text-sm font-semibold ${stock.changePercent >= 0 ? "text-green-600" : "text-red-500"}`}
                >
                  {stock.price.toFixed(2)}
                </div>

                {/* Fake percentage for now (We will fix this with Socket later) */}
                <div className="text-[10px] text-gray-400">
                  {stock.changePercent}%
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MarketWatch;
