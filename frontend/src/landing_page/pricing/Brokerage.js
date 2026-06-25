import react from "react";

function Brokerage() {
  return (
    <div className="container p-5">
      <div className="row text-center p-3 border-top">
        <div className="col-8 p-4">
            <a href="/brokerage-calculator" className="text-decoration-none">
                <h3 className="fs-5">Brokerage Calculator</h3>            </a>
                <ul style={{textAlign: "left",LineHeight: "2.5",fontSize: "16px"}} className="text-muted">
                    <li>Call & Trade and RMS auto-squareoff:Additional charges of 0.01% per trade</li>
                    <li>Digital contract notes will be sent to your registered email address</li>
                    <li>Physical contract notes will be sent to your registered address</li>
                    <li>For NRI accounts(non-PIS): Additional charges of 0.02% per trade</li>
                    <li>For NRI accounts(PIS): Additional charges of 0.01% per trade</li>
                    <li>If the account is a non-PIS account, additional charges of 0.02% per trade will apply</li>
                </ul>
        </div>
        <div className="col-4 p-4">
            <a href="/list-of-charges" className="text-decoration-none">
                <h3 className="fs-5">List of charges</h3>
            </a>
        </div>
      </div>
    </div>
  );
}
export default Brokerage;