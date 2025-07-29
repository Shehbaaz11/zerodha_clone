import React from "react";

const Education = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-6 p-4">
          <img src="Media\education.svg" style={{ width: "70%" }}></img>
        </div>

        <div className="col-6 mt-5">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges
          </p>

          <div className="mb-3">
            <a href="" style={{ textDecoration: "none" }}>
              Versity<i class="fa-solid fa-arrow-right"></i>{" "}
            </a>
          </div>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges
          </p>

          <div>
            <a href="" style={{ textDecoration: "none" }}>
              TradingQ&A<i class="fa-solid fa-arrow-right"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
