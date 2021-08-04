import React from "react";
import Contact from "./Contact";
import aboutvideo from "../videos/Pink and Cream Baking Food YouTube Video Intro.mp4";
import "../css/About.css";
function about() {
  return (
    <>
      {/* HEADER */}
      <div className="row">
        <div className="col-12">
          <header className="landingPage">
            <video
              className="video-bg"
              src={aboutvideo}
              autoPlay
              muted
              loop
              type="video/mp4"
            ></video>
          </header>
        </div>
      </div>

      <section id="OurTeam" className="about-image-text">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <p className="text" style={{ color: "wheat" }}>OUR Team !</p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="about-circle about-circle-2">
                <img src="https://mega00.blob.core.windows.net/projectimages/About-Reh.jpeg" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="about-text-block">
                <h3> REHAN MUMTAZ</h3>
                <h6> ~ Founder</h6>
                <p className="about-para">
                  Meet Rehan , The founder of the startup Infinty Games . He is
                  a web developer who loves to work in design besides he is top
                  not cyber-sec professional who is soleley active in
                  penetarating web-based applications and recognizable entity
                  among some of the great organizations of the world. He is
                  smart enough to point out flow in web applications
                  <br />
                  He loves to work for external pentest, anyone willing to take his services can contact him via email
                </p>
                <div class="about-logos">
                  <img
                    src="https://mega00.blob.core.windows.net/projectimages/294677_ibm_icon.png"
                    width="80px"
                    style={{ color: "white" }}
                  />
                  <img
                    src="https://mega00.blob.core.windows.net/projectimages/294687_cisco_icon.png"
                    width="80px"
                  />
                  <img
                    src="https://mega00.blob.core.windows.net/projectimages/197808_mcafee_secure_icon.png"
                    width="80px"
                  />
                  <img
                    src="https://mega00.blob.core.windows.net/projectimages/259293_non_service_aws_specific_copy_icon.png"
                    width="80px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="about-hr" /> */}
      <section className="about-image-text">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="about-text-block">
                <h3>KABEER AHMED</h3>
                <h6>~ Co-Founder</h6>
                <p className="about-para">
                  Kabeer Ahmed is an undergraduate student of Software
                  Engineering, as a game developer, he truly love games. He
                  doesn't just like playing games, he also like understanding
                  games. He enjoy the concept of dissecting a game, breaking it
                  down into smaller parts, and visualizing how the pieces fit
                  back together. He is a programmer because "The programmer is
                  the heart of the game. Without the programmer, there is no
                  game" (Gruber). <br />
                  He has a vast experience of game development and side by side
                  an enthusiastic gamer who have worked for the following firms
                  and their usual customer
                </p>
                <div class="about-logos">
                  <img
                    src="https://mega00.blob.core.windows.net/projectimages/85890_ea_icon.png"
                    width="60px"
                  />
                  <img
                    src="https://mega00.blob.core.windows.net/projectimages/4375141_logo_xbox_icon.png"
                    width="50px"
                  />
                  <img
                    src="https://mega00.blob.core.windows.net/projectimages/294650_tencent_icon.png"
                    width="100px"
                  />
                  <img
                    src="https://mega00.blob.core.windows.net/projectimages/2916279_playstation_marketing_media_social_website_icon.png"
                    width="60px"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-circle about-circle-2">
                <img src="https://mega00.blob.core.windows.net/projectimages/kk.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="our-skills">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="our-skills-text">
                <h4 id="OurMission">Our Mission</h4>
                <p>
                According to our vission , The era in which we will be soon is the era of digital 
                  world in which all of us are concerns with the game world.
                </p>
              </div>
              <div class="our-skills-text pt-4">
                <h4 id="OurVision">Our vission</h4>
                <p>
                To create safe, regulated and responsible entertainment with a positive impact on society.
                Through our imagination, talent and technology, everyday we ‘play to win’ – we drive to succeed as 
                we efficiently manage and grow our business – to realize the full potential of responsible gaming by 
                providing the most entertaining and best performing gaming experiences in the world.                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="skills-prog">
                <div class="counter-item-outer">
                  <div class="counter-item">
                    <h2>24/7</h2>

                    <h6>Customer Support</h6>
                  </div>
                </div>

                <div class="counter-item-outer">
                  <div class="counter-item">
                    <h2>100% </h2>

                    <h6>Guarantee</h6>
                  </div>
                </div>

                <div class="counter-item-outer">
                  <div class="counter-item">
                    <h2>0% </h2>

                    <h6>Loss</h6>
                  </div>
                </div>

                <div class="counter-item-outer">
                  <div class="counter-item">
                    <h2>100% </h2>

                    <h6>Reliability</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default about;
