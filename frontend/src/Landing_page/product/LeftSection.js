import React from "react";

function LeftSection({
  imageURL,
  ProductName,
  ProductDescription,
  TryDemo,
  LearnMore,
  GooglePlay,
  AppStore
}) {
  return (
    <div className="container   ">
      <div className="row  ">
        <div className="col-6   ">
          <img src={imageURL} style={{ marginLeft: "5rem" }}></img>
        </div>

        <div className="col-6 mt-5" style={{ paddingLeft: "10rem"}}>
          <h1 style={{ marginBottom: "20px" }}> {ProductName}</h1>
          <p dangerouslySetInnerHTML={{ __html: ProductDescription }}></p>
          <div className="mb-5 mt-4 ">
            <a href={TryDemo} style={{ marginRight: "8rem" }}>
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={LearnMore}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={GooglePlay} style={{ marginRight: "5rem" }}>
              <img src="Media\googlePlayBadge.svg" />
            </a>
            <a href={AppStore}>
              <img src="Media\appstoreBadge.svg" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
