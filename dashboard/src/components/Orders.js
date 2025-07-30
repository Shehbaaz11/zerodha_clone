import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css"


const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-backend-tija.onrender.com/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);


  const handleDelete = async (id)=>{
 try{
    await axios.delete(`https://zerodha-backend-tija.onrender.com/deleteOrder/${id}`)
    setOrders((prev) => prev.filter((order) => order._id !== id));
 }
 catch(err){
  console.log(err)
  }  

  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-list">
          <h3>Your Orders ({orders.length})</h3>
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                  <td>
  <button className="btn-red"  onClick={() => handleDelete(order._id)}>Delete</button>
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Orders;
