import React, { useEffect } from "react";
import "../css/XB.css";
import vid from "../videos/White Bold Gamer (Hacks or Reviews) Gaming YouTube Video Intro.mp4";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, xaddToCart } from "../actions/cartActions";
import { XBinfo } from "../actions/productActions";

export default function XB() {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("kia", productList);
    dispatch(XBinfo());
  }, []);
  const handleAddToCart = (id, qty) => {
    // props.history.push("/cart/" + id + "?qty=" + qty);
    dispatch(xaddToCart(id, qty));
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <header className="landingPage">
            <video
              className="video-bg"
              src={vid}
              autoPlay
              muted
              loop
              type="video/mp4"
              height="10"
              width="10"
            >
              {/* <source /> */}
            </video>
          </header>
        </div>
      </div>
      <div class="XB-sec XB-one">
        <h1 className="XB-h1">Masterpiece &#129505; </h1>
      </div>
      <div class="XB-sec XB-two">
        <h1 className="XB-h1">IT comes with some hottest games </h1>
      </div>
      <div class="XB-header ">
        <img
          className="XB-imag"
          src="https://mega00.blob.core.windows.net/xbox/xbox-logo.png"
          width="500px"
          height="200px"
        />

        <p className="">
          Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play
          thousands of titles from four generations of consoles-all games look
          and play best on Xbox Series X <br />
          Experience next-gen speed and performance with the Xbox velocity
          architecture, powered by a custom SSD and integrated software. !
        </p>
        <img
          className="XB-image"
          src="https://mega00.blob.core.windows.net/xbox/xbox_console.png"
          width="690px"
          height="510px"
        />
      </div>
      <div class="XB-sec XB-three">
        <h1 className="XB-h1">________MAIN PAGE________ </h1>
      </div>
      <div class="XB-sec XB-four">
        <h1 className="XB-h1">{/* It only works with images ¯\_(ツ)_/¯ */}</h1>
      </div>
      <div class="XB-sec XB-five">
        <h1 className="XB-h1">______Game Catalogue______</h1>
      </div>
      <div class="XB-sec XB-six">
        <h1 className="XB-h1">______Setting UI______</h1>
      </div>

      {/* // */}
      <div class="XB-midheader ">
        <div className="XB-midheader-div ">
          <img
            className=""
            src="https://mega00.blob.core.windows.net/xbox/mix.png"
          />
        </div>
        <div>
          <div className="XB-midheader-div ">
            <h1>Ray tracing</h1>
          </div>
          <div className="XB-midheader-div ">
            <p>
              Immerse yourself in worlds with a new level of realism as rays of
              light are individually simulated, creating true-to-life shadows
              and reflections in supported XBOX games.
            </p>
          </div>

          <div className="container XB-Allheaderleft">
            <div className="row">
              <div className="col-6">
                <div className="XB-img1">
                  <img
                    className=""
                    src="https://mega00.blob.core.windows.net/xbox/LG1.png"
                  />
                </div>
                <div className=" ">
                  <h3>Up to 120fps with 120Hz output</h3>
                </div>
                <div className=" ">
                  <b>
                    Enjoy smooth and fluid high frame rate gameplay at up to
                    120fps for compatible games, with support for 120Hz output
                    on 4K displays.
                  </b>
                </div>
              </div>
              <div className="col-6">
                <div className=" ">
                  <img
                    className="XB-img2"
                    src="https://mega00.blob.core.windows.net/xbox/LG2.png"
                    // width="190px"
                    // height="50px"
                  />
                </div>
                <div className=" ">
                  <h3>8K support</h3>
                </div>
                <div className=" ">
                  <b>
                    The XBOX X console is compatible with 8K displays through
                    HDMI 2.1 support.
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* more */}
      <div class="XB-lastheader ">
        <div className="container ">
          <div className="row">
            <div className="col-8 ">
              <img
                className=""
                src="https://mega00.blob.core.windows.net/xbox/xbox-fin.png"
                width="640px"
                height="690px"
              />
            </div>
            <div className="col-4 material mt-5">
              <p className="">
                {products[0]?.name}
                <br />
                <small>
                  {" "}
                  Model : 0031718 SKU : 000149 <br /> Release Date : 22 / 08 /
                  2020 <br />
                  &#11088; &#11088; &#11088; &#11088; &#11088; <br />
                  <i>$ 529.99</i>
                </small>{" "}
                <br />
                <Button
                  variant="outlined"
                  style={{ borderBlockColor: "black", border: "3px solid" }}
                  color="dark"
                  // style={{color:"aliceblue",border:'1px solid aliceblue'}}
                  className=""
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => handleAddToCart(products[0]?._id, 1)}

                >
                  {" "}
                  Add to Cart
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* accessories */}

      <div class="XB-sec XB-seven">
        <h1 className="XB-h1">Accessories [Controller] ! </h1>
      </div>
      <div class="XB-llastheader ">
        <div className="container-fluid">
          <div className="row">
            <div className="iimg col-4">
              <img
                className="mx-5 pl-5"
                src="https://i.pinimg.com/236x/69/e4/bb/69e4bbe43e158c246bd8a66bd4c503ed.jpg"
                height="550"
                width="350"
              />
            </div>
            <div className="col-4 my-5 py-3">
              <p>
                Discover a deeper, highly immersive gaming experience that
                brings the action to life in the palms of your hands. The
                DualSense wireless controller offers immersive haptic feedback,
                dynamic adaptive triggers, and a built-in microphone, all
                integrated into an iconic comfortable design.
              </p>
            </div>
            <div className="iimg col-4">
              <img
                className="mx-5"
                src="https://i.pinimg.com/236x/59/9e/37/599e370e4407d72877c069ade1d08bbc.jpg"
                height="550"
                width="350"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="XB-lastheader  ">
        <div className="container">
          <div className="row ">
            <div className="col-8 mt-5">
              <img
                className="mt-5"
                src="https://mega00.blob.core.windows.net/xbox/XBOX-CONT.png"
                width="790px"
                height="470px"
              />
            </div>
            <div className="col-4 mt-5 material">
              <p className="mt-5">
                DualSense™ Wireless Controller
                <br />
                <small>
                  {" "}
                  Model : 000768 SKU : 000149 <br /> Release Date : 22 / 10 /
                  2020 <br />
                  &#11088; &#11088; &#11088; &#11088; &#11088; <br />
                  <i>$ 104.99</i>
                </small>{" "}
                <br />
                <Button
                  variant="outlined"
                  color="dark"
                  style={{ borderBlockColor: "black", border: "3px solid" }}
                  className=""
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => handleAddToCart(products[1]?._id, 1)}
                >
                  {" "}
                  Add to Cart
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
