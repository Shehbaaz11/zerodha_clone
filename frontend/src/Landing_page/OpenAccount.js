import React from 'react'

const OpenAccount = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">

        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className='text-muted mt-3' style={{fontSize:"17px"}} >
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          style={{ width: "25%", margin: "0 auto", marginTop: "2rem" }}
          className="p-2 btn btn-primary fs-5 mb-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  )
}

export default OpenAccount
