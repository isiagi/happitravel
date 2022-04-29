
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { CgHeadset } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
// import { Link } from 'react-router-dom';

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container container">
      <div className="footer__contain">
        <div className="footer__wrapper">
          <div>
            <h3>HappiTravel</h3>
          </div>
          <div className="footer__info">
            HappiTravel is a IT Solutions & Technology Services Provider
            Company. Suitable For IT Solutions, IT Technology, IT Business,
            Consulting, Software, Digital Solution And Any Related Services
            Company Field.
          </div>
          <div>
            <h3>Follow Us</h3>
            <BsFacebook style={{ fontSize: "2.5rem", color: "whitesmoke" }} />
            <BsInstagram
              style={{
                fontSize: "2.5rem",
                marginLeft: "1rem",
                color: "whitesmoke",
              }}
            />
            <AiFillTwitterCircle
              style={{
                fontSize: "2.5rem",
                marginLeft: "1rem",
                color: "whitesmoke",
              }}
            />
          </div>
        </div>
        <div className="footer__links">
          <div>
            <h3>Quick Link</h3>
          </div>
          <div>
            <ul>
              <li>
                <p to="/">Home</p>
              </li>
              <li>
                <p to="/about">About Us</p>
              </li>
              <li>
                <p to="/contact">Contact</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__links">
          <div>
            <h3>Courses</h3>
          </div>
          <div>
            <ul>
              <li>
                <p to="/wire">Business Administration</p>
              </li>
              <li>
                <p to="/soft">Swasa</p>
              </li>
              <li>
                <p to="/contact">Accounting and Finance</p>
              </li>
              <li>
                <p to="/">Procurement and Logistics</p>
              </li>
              <li>
                <p to="/">Hospitality Programs</p>
              </li>
              <li>
                <p to="/">Marketing</p>
              </li>
              <li>
                <p to="/">Civil Engineering</p>
              </li>
              <li>
                <p to="/">Petroleum Engineering</p>
              </li>
              <li>
                <p to="/">Computer Science and technology</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__links">
          <div>
            <h3>Contact Us</h3>
          </div>
          <div>
            <ul>
              <li>
                <CgHeadset style={{ color: "#fffe00",fontSize: "2.5rem" }} /> +256 785988864 / +256
                758914876
              </li>
              <li>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: '10px'
                  }}
                >
                  <div>
                    <HiOutlineMail style={{ color: "#fffe00",fontSize: "2.5rem", }} />
                  </div>
                  <div>
                    <p>info@happitravelandlogistics.com</p>
                    <p>manisa@happitravelandlogistics.com</p>
                  </div>
                </div>
              </li>
              <li>
              <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: '10px'
                  }}
                >
                  <div>
                    <GoLocation style={{ color: "#fffe00",fontSize: "2.5rem", }} />
                  </div>
                  <div>
                    <p>Ham Towers,Level 3, RM 9 <br />Opp Makerere Main Gate, Kampala.</p>
                    <p>MM Plaza 3rd Floor Rm T20</p>
                  </div>
                </div>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
