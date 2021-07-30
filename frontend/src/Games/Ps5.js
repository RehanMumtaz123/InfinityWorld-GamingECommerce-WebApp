import React, { useEffect, useState } from "react";
import "../css/Ps5.css";
// import mal from "../data";
import { Link } from "react-router-dom";
import axios from "axios";
function Ps5(props) {
  const [produc, setProduc] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const maal = await axios.get("/api/products");
      console.log("anydata ::::>", maal.data.PSproducts);
      setProduc(maal.data.PSproducts);
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <div className="games-div-h2">
      <div className="container ">
        <div className="games-sec ">
          { produc.map((prod,_l) => {
              // console.log("bataa:", produc.PSproducts);
              return (
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
              );
            })
            }
        </div>
      </div>
    </div>
  );
}

export default Ps5;
