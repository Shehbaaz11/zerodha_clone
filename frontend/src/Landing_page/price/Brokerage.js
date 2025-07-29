import React from "react";

const Brokerage = () => {
  return (
    <div>
      <div className="container p-3 ">  
        <div className="row mt-5 text-center ">
          <div className="col-8 p-4 ">
           <a href="" style={{textDecoration:"none"}}><h3 className="fs-5"> Brokerage Calculator</h3> </a>
           <ul style={{textAlign:"left",lineHeight:"2rem",marginTop:"2rem"}} className="ms-5 text-muted">
         <li> Trade and RMS auto-squareoff:Additional charges of $25 per trade.</li> 
         <li> Carges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories. </li> 
         <li> The account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li> 
         <li> Charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li> 
           </ul>
           
          </div>
          <div className="col-4 p-4 ">
           <a href="" style={{textDecoration:"none"}}> <h3 className="fs-5">List of charges</h3></a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
