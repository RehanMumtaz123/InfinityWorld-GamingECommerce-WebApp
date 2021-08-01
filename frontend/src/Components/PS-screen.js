import React, { useEffect, useState } from "react";
import "../css/PSscreen.css";
import { useParams } from "react-router-dom";
import maal from "../data";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

function PSscreen(props) {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  // const product = maal.PSproducts.find((x) => x._id === id);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  // const mg = product.images;
  useEffect(() => {
    dispatch(detailsProduct(id));
    return () => {};
  }, []);
  const handleAddToCart = (id, qty) => {
    // props.history.push("/cart/" + id + "?qty=" + qty);
    dispatch(addToCart(id, qty));
  };
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div class=" bg-light">
          <div class="embed-responsive embed-responsive-21by9 position-relative ">
            <iframe
              src={product.coverVideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              width="100%"
              style={{
                height: "70vh",
              }}
            ></iframe>
          </div>
          <div class="gamedetailpart shadow-lg p-5 m-5 bg-light rounded position-absolute">
            <div class=" mx-5 container">
              <div class="row">
                <div class="col text-center">
                  <img
                    src={product.coverImg}
                    width="60%"
                    class="figure-img img-fluid rounded"
                    alt="gamecover"
                  />
                </div>
                <div class="col text-balck">
                  <div class="container">
                    <div class="row">
                      <h1>{product.name}</h1>
                    </div>
                    <div class="row">
                      <h3 class="text-primary">
                        Rating :{" "}
                        <small>
                          {Array(product.rating)
                            .fill()
                            .map((_, i) => (
                              <>⭐</>
                            ))}
                        </small>
                      </h3>
                    </div>
                    <div class="row">
                      <h5 class="my-3 text-black-50">
                        Platform <strong>{product.platform}</strong>
                      </h5>
                    </div>
                    <div class="row">
                      <p class="my-3 text-black-50">{product.description}</p>
                    </div>
                    <div class="row">
                      <h5 class="mt">
                        Price : <strong>$ {product.price}</strong>
                      </h5>
                    </div>
                    <div class="row">
                      <h5 class="mt">
                        Qty :{" "}
                        <select
                          value={qty}
                          onChange={(e) => {
                            setQty(e.target.value);
                          }}
                        >
                          {[...Array(product.countInstock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </h5>
                    </div>
                    <div class="row">
                      {product.countInstock > 0 && (
                        <button
                          type="button"
                          class=" mt-4 px-5 btn btn-outline-primary"
                          onClick={() => handleAddToCart(id, qty)}
                        >
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide p-5 mx-5" data-ride="carousel">
                <div class="text-black-50 my-3">
                    <h1>Screenshorts of Gameplay</h1>
                </div>
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={product.img1} class="d-block w-100" alt="Screenshot"/>
                    </div>
                    <div class="carousel-item">
                        <img src={product.img2} class="d-block w-100" alt="Screenshot"/>
                    </div>
                    <div class="carousel-item">
                        <img src={product.img3} class="d-block w-100" alt="Screenshot"/>
                    </div>
                    <div class="carousel-item">
                        <img src={product.img4} class="d-block w-100" alt="Screenshot"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PSscreen;
