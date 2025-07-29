import React, { useState } from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const handleAddFunds = () => {
    setShowAddFunds(true);
    setShowWithdraw(false);
    setConfirmation("");
  };

  const handleWithdraw = () => {
    setShowWithdraw(true);
    setShowAddFunds(false);
    setConfirmation("");
  };

  const handleClose = () => {
    setShowAddFunds(false);
    setShowWithdraw(false);
  };

  const handleProceed = (type) => {
    handleClose();
    setConfirmation(
      type === "add"
        ? "Funds added successfully!"
        : "Withdrawal request submitted!"
    );
    setTimeout(() => setConfirmation(""), 2500);
  };

  return (
    <>
      <div className="funds">
        <p style={{color:"gray"}}>Instant, zero-cost fund transfers with UPI</p>
        <button className="btn btn-green" onClick={handleAddFunds}>
          Add funds
        </button>
        <button className="btn btn-blue" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>

      {/* ADD FUNDS MODAL */}
      {showAddFunds && (
        <div className="modal" style={{color:"gray"}}>
          <h3>Add Funds</h3>
          <p>Enter amount to add via UPI or net banking.</p>
          <input type="number" placeholder="Enter amount" />
          <div>
            <button className="btn btn-green" onClick={() => handleProceed("add")}>
              Proceed
            </button>
            <button className="btn btn-grey" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* WITHDRAW MODAL */}
      {showWithdraw && (
        <div className="modal">
          <h3>Withdraw Funds</h3>
          <p>Enter amount to withdraw to your bank account.</p>
          <input type="number" placeholder="Enter amount" />
          <div>
            <button className="btn btn-blue" onClick={() => handleProceed("withdraw")}>
              Proceed
            </button>
            <button className="btn btn-grey" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* POPUP MESSAGE */}
      {confirmation && (
        <div style={popupStyle}>
          <p>{confirmation}</p>
        </div>
      )}
<div className="row">
  <div className="col" style={{ color: "gray" }}>
    <span>
      <p>Equity</p>
    </span>

    <div className="table">
      <div className="data">
        <p>Available margin</p>
        <p className="imp colored">4,043.10</p>
      </div>
      <div className="data">
        <p>Used margin</p>
        <p className="imp">3,757.30</p>
      </div>
      <div className="data">
        <p>Available cash</p>
        <p className="imp">4,043.10</p>
      </div>
      <hr />
      <div className="data">
        <p>Opening Balance</p>
        <p>4,043.10</p>
      </div>
      <div className="data">
        <p>Payin</p>
        <p>4064.00</p>
      </div>
      <div className="data">
        <p>SPAN</p>
        <p>0.00</p>
      </div>
      <div className="data">
        <p>Delivery margin</p>
        <p>0.00</p>
      </div>
      <div className="data">
        <p>Exposure</p>
        <p>0.00</p>
      </div>
      <div className="data">
        <p>Options premium</p>
        <p>0.00</p>
      </div>
      <hr />
      <div className="data">
        <p>Collateral (Liquid funds)</p>
        <p>0.00</p>
      </div>
      <div className="data">
        <p>Collateral (Equity)</p>
        <p>0.00</p>
      </div>
      <div className="data">
        <p>Total Collateral</p>
        <p>0.00</p>
      </div>
    </div>
  </div>
</div>

   
    </>
  );
};

const popupStyle = {
  position: "fixed",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#333",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "8px",
  zIndex: 1000,
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
};

export default Funds;
