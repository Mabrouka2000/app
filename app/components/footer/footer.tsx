// components/Footer.js

import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./style.css";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-3">
          {/* Address Section */}
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon"></i>
            <div>
              <h4>Address</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022 - US
                <br />
              </p>
            </div>
          </div>

          {/* Reservations Section */}
          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-telephone icon"></i>
            <div>
              <h4>Reservations</h4>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-clock icon"></i>
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat: 11AM</strong> - 23PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href="#" className="twitter">
                <FaTwitter />
              </a>
              <a href="#" className="facebook">
                <FaFacebook />
              </a>
              <a href="#" className="instagram">
                <FaInstagram />
              </a>
              <a href="#" className="linkedin">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Credits Section */}
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Yummy</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
