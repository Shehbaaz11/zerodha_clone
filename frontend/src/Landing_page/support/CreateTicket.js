import React from "react";

const CreateTicket = () => {
  return (
    <div className="container ">
      <div className="row mt-5 mb-5 p-5 ms-5">
        <h1 className="text-center fs-2">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 mt-4 mb-2 p-5 ">
          <h4 className="mb-4" style={{ marginLeft: "-30px" }}>
            <i class="fa-solid fa-plus" style={{ marginRight: "5px" }}></i>{" "}
            Opening Account{" "}
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Resident individual
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Minor
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Non Resident Indian (NRI)
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Company, Partnership, HUF and LLP
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Glossary
          </a>{" "}
          <br />
        </div>

        <div className="col-4 mt-4 mb-2 p-5 ">
          <h4 className="mb-4" style={{ marginLeft: "-30px" }}>
            <i class="fa-solid fa-user" style={{ marginRight: "5px" }}></i> Your
            Zerodha Account{" "}
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Account modification
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Client Master Report (CMR) and Depository Participant (DP)
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Non Resident Indian (NRI)
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Nomination
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Transfer and conversion of securities
          </a>{" "}
          <br />
        </div>

        <div className="col-4 mt-4 mb-2 p-5 ">
          <h4 className="mb-4" style={{ marginLeft: "-20px" }}>
            <i
              class="fa-solid fa-chart-simple"
              style={{ marginRight: "7px" }}
            ></i>
            Kite
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Resident individual
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Minor
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Margin Trading Facility (MTF) and Margins
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Charts and orders{" "}
          </a>{" "}
          <br />
        </div>

        <div className="col-4 mt-2 mb-4 p-5 ">
          <h4 className="mb-4" style={{ marginLeft: "-30px" }}>
            <i
              class="fa-solid fa-sack-dollar"
              style={{ marginRight: "5px" }}
            ></i>{" "}
            Funds{" "}
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Add money
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Withdraw money
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Add bank accounts
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            eMandates
          </a>{" "}
          <br />
        </div>

        <div className="col-4 mt-2 mb-4 p-5 ">
          <h4 className="mb-4" style={{ marginLeft: "-30px" }}>
            <i
              class="fa-solid fa-address-book"
              style={{ marginRight: "5px" }}
            ></i>{" "}
            Console{" "}
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Portfolio
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Corporate actions
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Funds statement
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Reports
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Profile
          </a>{" "}
          <br />
        </div>

        <div className="col-4 mt-2 mb-4 p-5 ">
          <h4 className="mb-4" style={{ marginLeft: "-20px" }}>
            <i class="fa-solid fa-coins" style={{ marginRight: "5px" }}></i>{" "}
            Coin{" "}
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            {" "}
            Mutual funds
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            National Pension Scheme (NPS)
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Features on Coin
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            Payments and Orders
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5rem" }}>
            General
          </a>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
