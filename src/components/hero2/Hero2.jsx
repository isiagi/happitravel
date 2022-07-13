import { Link } from "react-router-dom";
import img from "../../assets/images/jump.jpg";
import ne from "../../assets/images/new.jpg";

import "./hero2.css";

const Hero2 = () => {
  return (
    <div className="hero2__conatiner container">
      <div
        className="place__items__center"
        style={{ gap: "7rem", flexWrap: "wrap", marginTop: "7vh" }}
      >
        <div className="hero2__wrapper1">
          <h2>Welcome To Happitravel and logisticcs</h2>
          <p>
            Happi Travel and Logistics is a legal company aiming travel to
            Europea countries for education, stay and visits.
          </p>
          <p>
            Happi Travel and Logistics is a legal company here to help you with
            all of your logistics work like Air Frieghts and More.
          </p>
          <button>
            <Link to="/service">Learn More</Link>
          </button>
        </div>
        <div className="hero2__wrapper2">
          <div>
            <img src={img} alt="study" />
          </div>
          <div className="hero2__hey">
            <img src={ne} alt="study" />
          </div>
        </div>
      </div>
      <div className="hero2__g">
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Work</h2>
            <h2>01</h2>
          </div>
          <p>We help you Work abroad with a valid work permit.</p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Live</h2>
            <h2>02</h2>
          </div>
          <p>Gain Parmanent Residence for you and your family Abroad</p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Study</h2>
            <h2>03</h2>
          </div>
          <p>
            Study in US, Canada, China and Hungray. Scholarships also available
          </p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Air Frieghts</h2>
            <h2>04</h2>
          </div>
          <p>
            We provide airline dealings, storage, VAT and import duty,
            postponement
          </p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Sea Frieghts</h2>
            <h2>05</h2>
          </div>
          <p>
            We handle sea freight (general cargo, specialized cargo and heavy
            equipment.
          </p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Clearing And Forwarding</h2>
            <h2>06</h2>
          </div>
          <p>Let us handle your procurement issues with elegance</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
