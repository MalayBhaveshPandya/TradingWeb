import MarketWatch from "./components/MarketWatch";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <MarketWatch />

      {/* Main Content Area (Placeholder for now) */}
      <div className="flex-1 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">
            Welcome to TradingWeb!
          </h1>
          <p className="text-gray-500 mt-2">
            Select a stock from the left to start trading.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
