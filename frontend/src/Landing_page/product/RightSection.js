import React from 'react'

function RightSection({
 ImageURL,
 ProductHeading,
 ProductDescription,
 LearnMore
}){
    return(
  <div className="container p-5">
 <div className="row p-5 align-items-center">

  <div className="col-6   " style={{paddingBottom:"8rem"}}>
   <h1 className='mb-4'>{ ProductHeading}</h1>
   <p>{ProductDescription}</p>
   <a href={LearnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
  </div>

  <div className="col-6 "  >
    <img src={ImageURL}   ></img>
  </div>

</div>






</div>

    )
}

export default RightSection