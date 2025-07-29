import React from 'react'


function Awards() {
    return ( 
        <div className="container mt-5 p-5 ">
        <div className="row ">
       
       <div className="col-6 p-3">
          <img src="Media/largestBroker.svg"></img>
        </div>
       <div className="col-6 fs-6 p-3 mt-2">
      
      <h1 style={{marginLeft:"10px"}}>Largest stock broker in India</h1>
      <p style={{marginLeft:"1rem"}}>2+ million Zerodha clients contribute over 15% of all retail order <br></br> volumes in India daily by Trading and investing in:</p>
       <div className="row mt-5">
         <div className="col-6 ">
         <ul >
        <li><p>Future and Options</p></li>
        <li><p>commodity deriviatives</p></li>
        <li><p>currency derivatives</p></li>
        </ul>
         </div>

         <div className="col-6">
         <ul>
        <li><p>Stock & IPOs</p></li>
        <li><p>Direct mutual Funds</p></li>
        <li><p>Bonds and Goverments Security</p></li>
        </ul>
         </div>
         
       </div>
    <img src='Media\pressLogos.png' style={{width:"95%",marginTop:"25px"}}  ></img>
       </div>
        </div>
        </div>
     );
}

export default Awards;