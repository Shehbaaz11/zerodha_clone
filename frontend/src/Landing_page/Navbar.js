import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const user = auth?.user || null; // Fallback to null if state.auth is undefined
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("https://zerodha-backend-tija.onrender.com/user/logout", {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(null));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "white" }}>
    <div className="container d-flex justify-content-between align-items-center px-5 py-2">
      
      {/* LEFT: Logo */}
      <Link className="navbar-brand" to="/">
        <img
          src="/Media/logo.svg"
          alt="logo"
          style={{ width: "120px" }}
        />
      </Link>
  
      {/* CENTER: Links */}
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mb-lg-0 flex gap-3">
          <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/product">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/price">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/support">Support</Link>
          </li>
        </ul>
      </div>
  
      {/* RIGHT: User Info or Auth Buttons */}
      <div className="d-flex align-items-center gap-3">
        {!user ? (
          <>
            <Link className="btn btn-outline-primary btn-sm" to="/signup">Sign Up</Link>
          </>
        ) : (
          <>
            <a
              className="nav-link active"
              href="https://zerodha-backend-tija.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dashboard
            </a>
            <span className="fw-bold text-dark">{user.username}</span>
            <button className="btn btn-danger btn-sm" onClick={handleLogout} >Logout</button>
          </>
        )}
      </div>
  
    </div>
  </nav>
  
  );
};

export default Navbar;
