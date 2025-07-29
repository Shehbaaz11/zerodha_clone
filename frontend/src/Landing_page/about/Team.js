import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <h1
          className="fs-2 mt-2 text-center px-3 py-5 "
          style={{ color: "#424242" }}
        >
         People
        </h1>
      </div>

      <div className="row mt-5 mb-5 px-2 text-muted">
        <div className="col-6 ">
       <img src="Media\nithinKamath.jpg" style={{borderRadius:"100%",width:"50%",marginLeft:"14rem"}}   ></img>
         <h4 className="text-center mt-3"style={{marginLeft:"8rem"}}>Nithin Kamath</h4>
         <h5 className="text-center mt-3"style={{marginLeft:"8rem",marginBottom:"5rem"}}>Founder, CEO</h5>
        </div>

        <div
          className="col-6 px-5 "
          style={{ fontSize: "17px"}}
        >
          <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.


          </p>
          <p>
 He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
          Playing basketball is his zen.
          </p>
<p>
Connect on <a href=""style={{"textDecoration":"none"}}>Homepage</a> / <a href=""style={{"textDecoration":"none"}}>TradingQnA</a> / <a href="" style={{"textDecoration":"none"}}>Twitter</a></p>

        </div>
      </div>
    </div>
  );
};

export default Team;
