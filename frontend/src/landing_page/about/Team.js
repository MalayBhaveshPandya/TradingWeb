import React from 'react';

function Team(){
  return (
    <div className="container mb-5">
      <div className="row text-center p-3">
        <h1 className="mt-5">
          People
        </h1>
      </div>
      <div
        className="row text-center p-3 mt-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%",width:"60%"}}/>
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.</p>
          <p> Today, Zerodha has changed the landscape of the Indian broking industry. He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen. Connect on <a href="https://www.zerodha.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Homepage</a> / <a href="https://www.zerodha.com/tradingqna" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>TradingQnA</a> / <a href="https://twitter.com/zerodha" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;