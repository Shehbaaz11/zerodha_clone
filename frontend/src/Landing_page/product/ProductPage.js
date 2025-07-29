import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

const ProductPage = () => {
  return (
  <div>
   <Hero></Hero>

  <LeftSection   imageURL="Media\kite.png"
  ProductName="Kite"
  ProductDescription={`Our ultra-fast flagship trading platform with <br/>  streaming market data, advanced charts, an elegant UI, and more.<br/>Enjoy the Kite experience seamlessly on your Android and iOS devices.`}
  TryDemo=""
  LearnMore=""
  GooglePlay=""
  AppStore=""  ></LeftSection>

<RightSection  ImageURL="Media\console.png"
 ProductHeading="Console"
 ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
 LearnMore=""  ></RightSection>


<LeftSection   imageURL="Media\coin.png"
  ProductName="Coin"
  ProductDescription={`Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.`}

></LeftSection>



<RightSection  ImageURL="Media\kiteconnect.png"
 ProductHeading="Kite Connect API"
 ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
 LearnMore=""  ></RightSection>



<LeftSection   imageURL="Media\varsity.png"
  ProductName="Varsity mobile"
  ProductDescription={`An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go`}
  TryDemo=""
  LearnMore=""
  GooglePlay=""
  AppStore=""  ></LeftSection>

<h3 className=' mt-5 mb-5  text-center' style={{fontSize:"20px"}} >Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h3>

   <Universe></Universe>
  </div>

  )
}

export default ProductPage