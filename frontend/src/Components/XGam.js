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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxq7TSQUZuXCpfL1vuIKj2fIikaCUOMt4XSI5jhU68ohaG9AKGlvFSUgLlFXKNhSZ3gU&usqp=CAU"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="xgames-div-h2">
        <br />

        <h2 className="games-h2">
          <span>
            THIS IS A TEST <br /> plaSTtion tm nwetwojk
          </span>
        </h2>
      </div>
      <XB />
    </>
  );
}

export default XGam;
