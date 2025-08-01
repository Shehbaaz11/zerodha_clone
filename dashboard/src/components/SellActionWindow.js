import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css"; // Reuse same styling


const SellActionWindow = ({ uid }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0.0);
  const navigate = useNavigate();

  const handleSellClick = () => {
    axios.post("https://zerodha-backend-tija.onrender.com/newOrder", {
      name: uid,
      qty: quantity,
      price: price,
      mode: "SELL", // Changed to SELL
    },{
      withCredentials:true
    });
    GeneralContext.closeBuyWindow();
    navigate("/orders");

  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Estimated Credit ₹{(quantity * price).toFixed(2)}</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
