import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row ">
        <h1
          className="fs-2 mt-5  text-center px-3 py-5 "
          style={{ color: "#424242" }}
        >
          We pioneered the discount broking model in India.<br></br>
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row mt-5 p-5 border-top text-muted">
        <div
          className="col-6 p-5"
          style={{ fontSize: "17px", paddingLeft: "10rem", padding: "2rem" }}
        >
          <p>
            We kick-started operations on the 15th of August, 2010 <br /> with
            the goal of breaking all barriers that traders and <br />
            investors face in India in terms of cost, support, and <br />{" "}
            technology. We named the company Zerodha, a <br />
            combination of Zero and "Rodha", the Sanskrit word for <br />
            barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology <br /> have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year <br /> through
            our powerful ecosystem of investment platforms, <br />contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div
          className="col-6 px-5 p-5"
          style={{ fontSize: "17px", padding: "2rem" }}
        >
          <p>
            In addition, we run a number of popular open online <br />{" "}
            educational and community initiatives to empower retail <br />{" "}
            traders and investors.
          </p>
          <p>
            {" "}
            <a href="" style={{"textDecoration":"none"}}>
              Rainmatter
            </a>{" "}
            , our fintech fund and incubator, has invested <br /> in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day.
            <br /> Catch up on the latest updates on our{" "}
            <a href="" style={{ "textDecoration": "none" }}>
              blog
            </a>{" "}
            or see what <br /> the media is saying about us or learn more about
            our business <br /> and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
