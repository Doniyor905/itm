import React from "react";

const Footer = () => {
  return (
    <footer
      id="footerThree"
      className="footer-area footer-three footer-desktop"
    >
      <div className="container footer-bottom">
        <div className="row">
          <div className="col-12 col-lg-3 navigation">
            <h3>navigation</h3>
            <ul>
              <li>
                <a href="#">Terms And Condition</a>
              </li>
              <li>
                <a href="#">Submission Specification</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Delivery Info</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <h3>newsletter</h3>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email..."
                aria-label="Enter Your Email..."
                aria-describedby="buttonaddon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-light"
                  type="button"
                  id="buttonaddon2"
                >
                  Search
                </button>
              </div>
            </div>
            <ul className="socials">
              <li>
                <a href="#" className="fb">
                  <i className="fab fb fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="tw">
                  <i className="fab tw fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="In">
                  <i className="fab In fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" className="yt">
                  <i className="fab yt fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 contacts">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <span>
                  <i className="fas fa-mobile"></i> 123-456-67
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-envelope-open"></i> example@abc.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright-main">
        <div className="copyright-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="footer-info">
                  ©&nbsp;2019 Company, Inc.
                  <a href="privacy.html">Privacy</a>&nbsp;•&nbsp;
                  <a href="term.html">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
