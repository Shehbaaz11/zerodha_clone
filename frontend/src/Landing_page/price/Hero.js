import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="container p-3 ">
    <div className="row text-center p-3 border-bottom mb-5">
      <h1 className="mt-5" style={{fontSize:"40px"}}  >Pricing</h1>
      <p className="text-muted mt-3 " style={{fontSize:"18px"}}>
      Free equity investments and flat 20 Traday and F&Q trades 
      </p>
      </div>

   <div className="row p-5 mt-5 ms-5">

<div className="col-4 p-4 ">
  <img src="Media\pricingEquity.svg" style={{width:"17rem"}}></img>
  <h2 style={{fontSize:"30px",marginTop:"20px"}}>Free equity delivery</h2>
  <p className='mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
</div>

<div className="col-4 p-4 ">
  <img src="Media\other-trades.svg" style={{width:"17rem"}} ></img>
  <h2 style={{fontSize:"30px",marginTop:"20px"}} >Intraday and F&O trades</h2>
  <p className='mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
</div>

<div className="col-4 p-4 ">
  <img src="Media\pricing0.svg" style={{width:"17rem"}} ></img>
  <h2 style={{fontSize:"30px",marginTop:"20px"}}>Free direct MF</h2>
  <p className='mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
</div>

</div>

      </div>
    </div>
  )
}

export default Hero
