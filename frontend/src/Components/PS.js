import React from "react";
import "./PS.css";
import vidd from "../Green and Red Clean Video-centric Accessories Review Fashion 169 Video (1).mp4";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export default function PS() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <header className="landingPage">
            <video
              className="video-bg"
              src={vidd}
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
      <div class="PS-sec PS-one">
        <h1 className="PS-h1">The one & only &#129505; </h1>
      </div>
      <div class="PS-sec PS-two">
        <h1 className="PS-h1">IT comes with some hottest games </h1>
      </div>
      <div class="PS-header ">
        <img
          className="PS-imag"
          src="https://mega00.blob.core.windows.net/playstation/[CITYPNG.COM]Playstation5 PS5 Logo Black Gaming - 1280x720.png"
          width="500px"
          height="200px"
        />

        <p className="">
          The PS5 has three USB-A ports — one on the front, two on the back —
          and one USB-C port on the front. There's also an Ethernet port on the
          back of the console and 802.11ax Wi-Fi (aka Wi-Fi 6). All of that
          hardware is packed into the biggest game console in modern history{" "}
          <br />
          There are some snaps for the walk-through of the PS5 and its
          galleries, checkout below !
        </p>
        <img
          className="PS-image"
          src="https://mega00.blob.core.windows.net/playstation/[CITYPNG.COM]Playstation 5 Sony Ps5 Side View With Controller - 1920x1081.png"
          width="690px"
          height="510px"
        />
      </div>
      <div class="PS-sec PS-three">
        <h1 className="PS-h1">________MAIN PAGE________ </h1>
      </div>
      <div class="PS-sec PS-four">
        <h1 className="PS-h1">{/* It only works with images ¯\_(ツ)_/¯ */}</h1>
      </div>
      <div class="PS-sec PS-five">
        <h1 className="PS-h1">______Game Catalogue______</h1>
      </div>
      <div class="PS-sec PS-six">
        <h1 className="PS-h1">______Setting UI______</h1>
      </div>

      {/* // */}
      <div class="PS-midheader ">
        <div className="PS-midheader-div ">
          <img
            className=""
            src="https://mega00.blob.core.windows.net/playstation/PS-MAIN.png"
          />
        </div>
        <div>
          <div className="PS-midheader-div ">
            <h1>Lightning speed</h1>
          </div>
          <div className="PS-midheader-div ">
            <p>
              Harness the power of a custom CPU, GPU and SSD with Integrated I/O
              that rewrite the rules of what a PlayStation console can do.
            </p>
          </div>

          <div className="container PS-Allheaderleft">
            <div className="row">
              <div className="col-6">
                <div className="PS-img1">
                  <img
                    className=""
                    src="https://mega00.blob.core.windows.net/playstation/Untitled.png"
                  />
                </div>
                <div className=" ">
                  <h3>Ultra-high speed SSD</h3>
                </div>
                <div className=" ">
                  <b>
                    Maximize your play sessions with near instant load times for
                    installed PS5™ games
                  </b>
                </div>
              </div>
              <div className="col-6">
                <div className=" ">
                  <img
                    className="PS-img2"
                    src="https://mega00.blob.core.windows.net/playstation/8.png"
                    // width="190px"
                    // height="50px"
                  />
                </div>
                <div className=" ">
                  <h3>Integrated I/O</h3>
                </div>
                <div className=" ">
                  <b>
                    The custom integration of the PS5 console's systems lets
                    creators pull data from the SSD so quickly that they can
                    design games in ways never before possible.
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* more */}
      <div class="PS-lastheader ">
        <div className="container">
          <div className="row">
            <div className="col-8 ">
              <img
                className=""
                src="https://mega00.blob.core.windows.net/playstation/[CITYPNG.COM]Sony Playstation Ps5 Side View - 1732x848.png"
                width="690px"
                height="370px"
              />
            </div>
            <div className="col-4 material">
              <p className="">
                Sony - PlayStation 5 Console
                <br />
                <small>
                  {" "}
                  Model : 3005718 SKU : 6426149 <br /> Release Date : 11 / 12 / 2020 <br />
                  &#11088; &#11088; &#11088; &#11088; &#11088; <br />
                  <i>$ 499.99</i>
                </small>{" "}
                <br />
                <Button
                  variant="outlined"
                  color="secondary"
                  // style={{color:"aliceblue",border:'1px solid aliceblue'}}
                  className=""
                  startIcon={<ShoppingCartIcon />}
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

      <div class="PS-sec PS-seven">
        <h1 className="PS-h1">Accessories [Controller] !  </h1>
      </div>
      <div class="PS-llastheader ">
        <div className="container-fluid">
          <div className="row">
            <div className="iimg col-4">
              <img
                className="mx-5 pl-5"
                src="https://images.unsplash.com/photo-1610119260051-a8d0b3a57e5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHxwbGF5c3RhdGlvbjV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                height="550"
                width="400"
              />
            </div>
            <div className="col-4 my-5 py-3">
              <p >
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
                src="https://i.pinimg.com/236x/50/f7/85/50f785a9cfa7227def05a49a409f0747.jpg"
                height="550"
                width="350"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="PS-lastheader  ">
        <div className="container">
          <div className="row ">
            <div className="col-8 mt-5">
              <img
                className="mt-5"
                src="https://mega00.blob.core.windows.net/playstation/cob1.png"
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
                  Model :   44768 SKU : 6486149 <br /> Release Date : 30 / 10 / 2020 <br />
                  &#11088; &#11088; &#11088; &#11088; &#11088; <br />
                  <i>$ 74.99</i>
                </small>{" "}
                <br />
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{borderBlockColor:'red', border:'3px solid'}}
                  startIcon={<ShoppingCartIcon />}
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
