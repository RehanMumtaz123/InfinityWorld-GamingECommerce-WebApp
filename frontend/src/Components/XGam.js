import React from "react";
import XB from "../Games/XB";
function XGam() {
  return (
    <>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="2000">
            <img
              src="https://mega00.blob.core.windows.net/projectimages/Xbox-game-image1-slider.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img
              src="https://mega00.blob.core.windows.net/projectimages/Xbox-game-image2-slider.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img
              src="https://mega00.blob.core.windows.net/projectimages/Xbox-game-image3-slider.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="xgames-div-h2">
        <br />

        <h1  className="mb-0 font-weight-bold text-center">
          <span>
            XBOX SERIES X | S 
          </span>
        </h1>
            <br /> 
      </div>
      <XB />
    </>
  );
}

export default XGam;
