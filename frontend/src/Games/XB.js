import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, xlistProducts} from "../actions/productActions";

function XB() {
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
      console.log('kia',productList)
      dispatch(xlistProducts());
  
      // const fetchData = async () => {
      //   const maal = await axios.get("/api/products");
      //   console.log("anydata ::::>", maal.data.PSproducts);
      //   setProduc(maal.data.PSproducts);
      // };
      // fetchData();
      return () => {};
    }, []);
  
    return (
      <div className="xgames-div-h2">
        <div className="container ">
          <div className="games-sec ">
            {
            // loading ? (
            //   <div>Loading...</div>
            // ) : error ? (
            //   <div>{error}</div>
            //   ) : 
              (
              products.map((pro, _l) => {
                // console.log("bataa:", pro);
                return (
                  <div key={_l} className="mb-5">
                    <Link to={"/xgame/"+pro._id}>
                      <img
                        className="games-card"
                        src={pro.image}
                        height="100%"
                        width="100%"
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  
}

export default XB
