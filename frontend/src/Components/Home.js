import React from "react";
import "./Home.css";
import { Carousel } from "3d-react-carousal";
import viddeo from "../pexels-rodnae-productions-7914835.mp4";
import delsvg from "../svg/service-delivery.svg";
import "../css/ihover.css";
import "../fonts/OhnoBlazeface-14Point.ttf";
function Home() {
  let imag = [
    <img
      src="https://mega00.blob.core.windows.net/image-slider/witcher.jpg"
      className="game-section-imag"
      alt="1"
    />,
    <img
      src="https://mega00.blob.core.windows.net/image-slider/Cyber-punk.jpg"
      className="game-section-imag"
      alt="1"
    />,
    <img
      src="https://mega00.blob.core.windows.net/image-slider/fifa.jpg"
      className="game-section-imag"
      alt="2"
    />,
    <img
      src="https://mega00.blob.core.windows.net/image-slider/last.jpg"
      className="game-section-imag"
      alt="3"
    />,
    <img
      src="https://mega00.blob.core.windows.net/image-slider/ghost.jpg"
      alt="4"
      className="game-section-imag"
    />,
    <img
      src="https://mega00.blob.core.windows.net/image-slider/Resident.jpg"
      alt="5"
      className="game-section-imag"
    />,
    <img
      src="https://mega00.blob.core.windows.net/image-slider/Red-Dead.jpeg"
      alt="6"
      className="game-section-imag"
    />,
  ];
  return (
    <>
      <div className="row">
        <div className="col-12">
          <header className="landingPage">
            <video
              className="video-bg"
              src={viddeo}
              autoPlay
              muted
              loop
              type="video/mp4"
            >
              {/* <source /> */}
            </video>

            <div className="video-overlay">
              <h1 className="video-text">
                Full-Screen Background Video <br />
                Using CSS Grid &amp; object-fit
              </h1>
            </div>
          </header>
        </div>
      </div>
      {/* // mid-section */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xs-12 text">
              <p>NEW to Gaming World ?</p>
              <p className="text-in"> ~ Not a problem anymore</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-sm">
              {/* <div className="section-page-Home"> */}
              <div className="ih-item square effect7">
                <a href="#">
                  <div className="img">
                    <img
                      src="https://mega00.blob.core.windows.net/projectimages/Home-page-sec5.jpg"
                      alt="img"
                      width="650"
                      height="100"
                    />
                  </div>
                  <div className="info  ">
                    <h3 className="infoo">Looking For Consoles</h3>
                    <p className="inooo">
                      Play Has No Limits™ Step up your game with this sleek
                      PlayStation / XBOX™ console.
                    </p>
                  </div>
                </a>
                {/* </div> */}
              </div>
            </div>
            <div className="col-6 col-sm">
              <div className="ih-item square effect7">
                <a href="#">
                  <div className="img">
                    <img
                      src="https://mega00.blob.core.windows.net/projectimages/Home-page-sec2.jpg"
                      alt="img"
                      // width="650"
                      // height="180"
                    />
                  </div>
                  <div className="info">
                    <h3 className="infoo">Game Arena</h3>
                    <p className="inooo">
                      {" "}
                      Enjoy unrivalled freedom and complete your objectives as
                      the game world reacts to everything you do
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
      {/* another section` */}
      <section2>
        <div className="">
          <div className="mid-section-image">
            <img
              src="https://mega00.blob.core.windows.net/projectimages/Home-mid-section.jpg"
              alt=""
              width="1540"
              height="690"
            />
            <h2 className="mid-section-h2">
              <span>A Battle Among The Greatest</span>
            </h2>
          </div>
        </div>
      </section2>
      {/* GAMES SECTION? */}
      <section class="game-section">
        <div className="container ">
          <div className="row ">
            <div className="col-12 text">
              <p style={{ color: "wheat" }}>
                Latest Hot Games Are Out Now ! <br />
                Check Out The Games Catalogue{" "}
              </p>
            </div>
          </div>
          <div className="row game-section-container">
            <div className="col-12">
              <Carousel slides={imag} autoplay={true} interval={2000} />
            </div>
          </div>
        </div>
      </section>
      {/* // services section */}
      <section>
        <div className="service-wave-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="service-h1">Why to Shop with us</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-4 col-sm-12 service-container">
                <img
                  src="https://mega00.blob.core.windows.net/image-slider/icons8-delivery (1).gif"
                  width="70"
                  height="70"
                />
                <p className="service-p">
                  Delivery <br />
                  within a WEEK
                </p>
              </div>
              <div className="col-4 col-sm-12 service-container">
                <img
                  src="https://mega00.blob.core.windows.net/image-slider/icons8-expensive-price.gif"
                  width="70"
                  height="70"
                />
                <p className="service-p">
                  Reasonable Prices <br /> Among all the vendors
                </p>
              </div>
              <div className="col-4 col-sm-12 service-container">
                <img
                  src="https://mega00.blob.core.windows.net/image-slider/icons8-online-payment.gif"
                  width="70"
                  height="70"
                />
                <p className="service-p">
                  Online payment <br />
                  Gateway facility
                </p>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="10"
              d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,122.7C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>{" "}
        </div>
      </section>

      {/* review section */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="review-section-text">Reviews Time 🚀 </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3 ">
              <div class="testimotionals">
                <div class="card">
                  <div class="layer"></div>
                  <div class="content">
                    <p>
                      So i pre-ordered Rise of the Tomb Raider from this site,
                      since they seemed to be the only place that had the steam
                      pre-order items with it. Today(2 days af the pre order
                      placement) i noticed they removed the text with
                      "Pre-Purthace now to get the pre order bonuses, bla bla
                      bla". And they deleted this text without notifying me
                      about it. So i contacted the support to cancel my order.
                      The site itself is nice and easy, and my support ticket
                      was answered within 2 hours. I am willing to give 4
                      ratings <br /> ⭐ ⭐ ⭐ ⭐{" "}
                    </p>
                    <div class="image">
                      <img
                        width="100px"
                        src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt=""
                      />
                    </div>
                    <div class="details">
                      <h2>
                        {" "}
                        Nathan Drake <br /> <span>Gamer / teenager</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="testimotionals">
                <div class="card">
                  <div class="layer"></div>
                  <div class="content">
                    <p>
                      One of the best websites I've ever bought from. Their
                      support will literally meet any of your needs, and is
                      always trying to do right by you. This is not some greedy
                      website, and they respect the money you put into them, and
                      treat it like an investment. I definitely would recommend
                      this site to anyone looking for a fast, easy, and
                      inexpensive way to boost yourself to a level 30 account.
                      Extremely happy with my purchase, and the price and
                      service couldn't be better. +1 respect.
                      <br /> ⭐ ⭐ ⭐ ⭐{" "}
                    </p>
                    <div class="image">
                      <img
                        width="100px"
                        src="https://steamuserimages-a.akamaihd.net/ugc/916918533107756109/283D620FFDBC088A442F4908106C2DB4A76B58F4/"
                        alt=""
                      />
                    </div>
                    <div class="details">
                      <h2>
                        {" "}
                        Natalia Ferma <br /> <span>Enthusiastic Gamer</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="testimotionals">
                <div class="card">
                  <div class="layer"></div>
                  <div class="content">
                    <p>
                      I have to say that game is the greatest store for games,
                      consoles and any other equipment that goes along with
                      them.My latest purchase from them is a PS5 console, the
                      pre-order was easy and the collection just as good. all
                      this after searching for one everywhere. But Game came
                      through for me and I am very pleased to obtain one from
                      them. Something I always wanted to do. I want to send a
                      very big thank you to all the staff, with another big
                      thanks to Scott who helped me from the start. <br /> ⭐ ⭐
                      ⭐ ⭐{" "}
                    </p>
                    <div class="image">
                      <img
                        width="100px"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeH9m76f6o9jfpyLnwyt2pjPjtYzCRXfTfz7PuvZaLVMyyioiFtV4qlYt8F-BjRoRZds&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div class="details">
                      <h2>
                        {" "}
                        Helena Dunk <br /> <span>Sales manager</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="testimotionals">
                <div class="card">
                  <div class="layer"></div>
                  <div class="content">
                    <p>
                      Excellent service when trading in a games console, then
                      when return to sort out a unrelated matter the salesperson
                      was knowledgeable and despite a problem with the company's
                      servers sorted out a solution which meant I did not have
                      to revisit the shop. would also like to point out the
                      website aftersales service is also second to none as a
                      'lost in transist' game costing $50 was replaced and
                      dispatched as 'one day delivery' (costing them an extra
                      4.95) without quibble. I can say:''This is very nice
                      site''
                      <br /> ⭐ ⭐ ⭐ ⭐ ⭐{" "}
                    </p>
                    <div class="image">
                      <img
                        width="100px"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgNk96RzCfhVs-jmOB8H-sq7iaoZAKnZq1Q&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div class="details">
                      <h2>
                        {" "}
                        Federick Richard <br /> <span>Corporate Manager</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section */}
      <section className="home-contact">
        <div className="service-wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,96L80,122.7C160,149,320,203,480,197.3C640,192,800,128,960,122.7C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>{" "}
          <div className="container">
            <div className="row">
              <div
                className="col-6 home-contact-text"
                style={{ color: "wheat" }}
              >
                <br />
                <br />
                SPEAK TO OUR TEAM, <br />
                WE DON'T BITE <br />
                <button
                  class="home-contact-custom-btn home-contact-btn-10"
                  style={{ fontSize: "20px" }}
                >
                  Read More
                </button>
              </div>

              <div className="col-6 ">
                <img
                  src="https://iet.ch/uploads/transforms/4ff0c9e5feb5093c616e26b18b51f3ef/1182/Footer-Woman_f9d35c2e75cded6d5435415681c0a155.png"
                  width="600"
                  height="550"
                  className="home-contact-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
