import React from "react";
import "../css/PGam.css";
import Ps5 from "../Games/Ps5";
function PGam() {
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
              src="https://www.techquila.co.in/wp-content/uploads/2021/05/PlayStation-Studios-Logo-Banner-and-IP-scaled.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img
              src="https://wallpaperaccess.com/full/4648196.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img
              src="https://mega00.blob.core.windows.net/image-slider/PS5-game-image-slider.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="games-div-h2">
        <br />
        <h2 className="mb-0 text-center">
          <span className="fw-bold">PLAY STATION 5: PLAY HAS NO LIMITS</span>
        </h2>{" "}
        <br />
      </div>
      <Ps5 />
    </>
  );
}

export default PGam;
