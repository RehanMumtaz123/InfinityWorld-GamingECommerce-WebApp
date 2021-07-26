import React from "react";
import "./Contact.css";
function contact() {
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
              <input type="text" name="" required />
              <span>First Name</span>
            </div>
            <div className="contact-inputBox w50">
              <input type="text" name="" required />
              <span>Last Name</span>
            </div>
            <div className="contact-inputBox w50">
              <input type="text" name="" required />
              <span>Email Address</span>
            </div>
            <div className="contact-inputBox w100">
              <textarea name="" required></textarea>
              <span>Please enter a message</span>
            </div>
            <div className="contact-inputBox w50">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact;
