import React from "react";
import "../css/Ps5.css";
import maal from "../data";
import { Link } from "react-router-dom";
function Ps5(props) {
  return (
    <div className="games-div-h2">
      <div className="container ">
        <div className="games-sec ">
          {maal.PSproducts.map((prod,_l) =>
          <div key={_l} className="mb-5">
            <Link to={"/game/" + prod._id}>
              <img
                className="games-card"
                src={prod.image}
                height="100%"
                width="100%"
              />
            </Link>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ps5;
