import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {

const [quantity,setquantity] = useState(1);
const [price,setprice] = useState(0.0)
const navigate = useNavigate();
const handleBuyClick = ()=>{
  axios.post('https://zerodha-backend-tija.onrender.com/newOrder',{
    name: uid,
    qty: quantity,
    price: price ,
    mode: "BUY",
  },{
    withCredentials:true
  })
  GeneralContext.closeBuyWindow();
  navigate("/orders");
}

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
             onChange={(e)=> setquantity(e.target.value) }
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
             onChange={(e)=>setprice(e.target.value) }
             value={price}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
