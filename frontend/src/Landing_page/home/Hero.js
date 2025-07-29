import React from "react";

const Hero = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="Media/homeHero.png" alt="Hero-image" className="mb-5 " style={{width:"70%",marginLeft:"12rem"}} />
        <h1 className="mt-5">Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          style={{ width: "25%", margin: "0 auto", marginTop: "2rem" }}
          className="p-2 btn btn-primary fs-5 mb-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
