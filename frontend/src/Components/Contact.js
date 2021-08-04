import axios from "axios";
import React, { useState } from "react";
import "../css/Contact.css";
function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const PostData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/feed", {
        fname,
        lname,
        email,
        message,
      });
      setLname('');
      setFname('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contactinfo">
          <div>
            <h2>Contact Us</h2>
            <ul className="contact-info">
              <li>
                <span>
                  <img src="https://www.clipartmax.com/png/middle/121-1214856_pro-locator-free-location-icon-vector.png" />
                </span>
                <span>
                  Street # 101 Block 11-A <br />
                  Near Birmingham Stadium <br />
                  Islamabad
                </span>
              </li>
              <li>
                <span>
                  <img src="https://p7.hiclipart.com/preview/663/97/225/email-computer-icons-message-bounce-address-email-icon.jpg" />
                </span>
                <span>kungfu@infinitygames.com</span>
              </li>
              <li>
                <span>
                  <img src="https://www.pinclipart.com/picdir/middle/210-2108807_tete-mobile-svg-png-icon-free-download-phone.png" />
                </span>
                <span>+ 92 221 1545 545</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactusform">
          <h2>Send Us A Message</h2>
          <div className="contact-formBox">
            <div className="contact-inputBox w50">
              <input
                type="text"
                name=""
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <span>First Name</span>
            </div>
            <div className="contact-inputBox w50">
              <input
                type="text"
                name=""
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <span>Last Name</span>
            </div>
            <div className="contact-inputBox w50">
              <input
                type="text"
                name=""
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                />
              <span>Email Address</span>
            </div>
            <div className="contact-inputBox w100">
              <textarea
                name=""
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span>Please enter a message</span>
            </div>
            <div className="contact-inputBox w50">
              <input type="submit" value="Send" onClick={PostData}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
