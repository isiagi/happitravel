import { CgHeadset } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

import { motion } from "framer-motion";

import "./contact.css";
import React from "react";

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="contact__container container"
    >
      <div className="contact__wrapper">
        <h2 style={{ color: "white", fontSize: "4rem" }}>Contact Us</h2>
      </div>
      <div className="contact__wrapper0">
        <div>
          <h2>Contact Info</h2>
          <p>We are happy and look forward to hear from you</p>
          <div className="contact__wrapper1">
            <div className="contact__icon">
              <CgHeadset className="contact__icon__head" />
            </div>
            <div>
              <h3>Call Us</h3>
              <p>+256 785988864 / +256 758914876</p>
            </div>
          </div>
          <div className="contact__wrapper1">
            <div className="contact__icon">
              <HiOutlineMail className="contact__icon__head" />
            </div>
            <div>
              <h3>Email Us</h3>
              <p>info@happitravelandlogistics.com</p>
              <p>manisa@happitravelandlogistics.com</p>
            </div>
          </div>
          <div className="contact__wrapper1">
            <div className="contact__icon">
              <GoLocation className="contact__icon__head" />
            </div>
            <div>
              <h3>Location</h3>
              <p>
                Ham Towers,Level 3, RM HT28 <br />
                Opp Makerere Main Gate, Kampala.
              </p>
              <p>MM Plaza 3rd Floor Rm HT20</p>
            </div>
          </div>
        </div>
        <div className="contact__wrapper2">
          <h2>Do You Have Any Questions</h2>
          <form>
            <input type="text" className="form__input" placeholder="Name" />
            <br />
            <input type="email" className="form__input" placeholder="Email" />
            <br />
            <textarea placeholder="message" rows="6" />
            <br />
            <button className="contact__button">Send</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
