import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="" id="supportWrapper">
        <h4 className="mt-5 fs-4 " style={{marginLeft:"10rem"}}>Support Portal</h4>
        <a href="" className="mt-5" style={{ color: "white", fontSize: "17px" }}>
          Track Tickets
        </a>
      </div>
      <div className="row px-5 ms-5 ">
        <div className="col-6 p-5 " id="support-col">
          <h2 style={{fontSize:"25px"}}>
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input className="mt-4 mb-3"
            placeholder="Eg: how do i activate F&O ,why is my order is get rejected...  "
            style={{ width: "90%", height: "30%", paddingLeft: "10px" }} 
          ></input>
          <br />
          <a href="" className="mx-3" style={{fontSize:"17px"}} >Track account opening </a>
          <a href=""className="mx-4" style={{fontSize:"17px"}}>Track segment activation</a>
          <a href=""className="mx-3"style={{fontSize:"17px"}}> Intraday margins </a>
          <a href="" className="mt-4 mx-3 d-inline-block"style={{fontSize:"17px"}} > Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-4 " style={{marginLeft:"20px"}}>Featured</h1>
          <ol className="p-4">
            <li className="mb-3"> <a href="" >Surveillance measure on scrips - June 2025</a></li>
            <li><a href="" >Rights Entitlements listing in June 2025</a></li>
          </ol>
          
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
