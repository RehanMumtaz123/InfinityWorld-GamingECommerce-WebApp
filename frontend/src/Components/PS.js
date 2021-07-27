import React from "react";
import "./PS.css";
import vidd from "../Green and Red Clean Video-centric Accessories Review Fashion 169 Video (1).mp4";

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

          <div className="PS-Allheaderleft">
            <div className="PS-midheader-div ">
              <img
                className="PS-img1"
                src="https://mega00.blob.core.windows.net/playstation/Untitled.png"
              />
            </div>
            <div className="PS-midheader-div ">
              <h1>Ultra-high speed SSD</h1>
            </div>
            <div className="PS-midheader-div ">
              <p>
                Maximize your play sessions with near instant load times for
                installed PS5™ games
              </p>
            </div>
          </div>
          <div className="PS-Allheader">
            <div className="PS-midheader-div ">
              <img
                className="PS-img2"
                src="https://mega00.blob.core.windows.net/playstation/8.png"
                width="190px"
                height="50px"
              />
            </div>
            <div className="PS-midheader-div ">
              <h1>Integrated I/O</h1>
            </div>
            <div className="PS-midheader-div ">
              <p>
                The custom integration of the PS5 console's systems lets
                creators pull data from the SSD so quickly that they can design
                games in ways never before possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
