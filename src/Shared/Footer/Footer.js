import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer
        className="container-fluid "
        style={{ backgroundColor: "black", padding: "100px" }}
      >
        <div className="container overflow-hidden">
          <div className="row gx-5 footer-info">
            <div className="col-lg-4 col-md-5 col-sm-5">
              <div className="p-3 footer-info">
                <ul>
                  <h6 className="text-white">Get To Know Us</h6>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About Older Care</Link>
                  </li>
                  <li>
                    <Link to="/investor">Investor Relation</Link>
                  </li>
                  <li>
                    <Link to="/business">Older care business</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-5 ">
              <div className="p-3 footer-info">
                <ul>
                  <h6 className="text-white">Get Connect with Us</h6>
                  <li>
                    <Link to="/services">Services on older care</Link>
                  </li>
                  <li>
                    <Link to="/sell">Sell on older care</Link>
                  </li>
                  <li>
                    <Link to="/affliate">Become an affliate</Link>
                  </li>
                  <li>
                    <Link to="/come">Come to Us</Link>
                  </li>
                  <li>
                    <Link to="/us">Self-Publish with Us</Link>
                  </li>
                  <li>
                    <Link to="/hub">Host an ElderyCare Hub</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-5">
              <div className="p-3 footer-info">
                <ul>
                  <h6 className="text-white">Older Care Payment On Service</h6>
                  <li>
                    <Link to="/card">Business Card</Link>
                  </li>
                  <li>
                    <Link to="/points"> Older Care points</Link>
                  </li>
                  <li>
                    <Link to="/stay">Stay with us</Link>
                  </li>
                  <li>
                    <Link to="/convertor">Older Care Currency Converter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white">
          <small>Ⓒ 2021  Older Care</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
