import img from "../../assets/images/2.jpg";
import ne from "../../assets/images/new.jpg";

import "./hero2.css";

const Hero2 = () => {
  return (
    <div className="hero2__conatiner container">
      <div
        className="place__items__center"
        style={{ gap: "7rem", flexWrap: "wrap" }}
      >
        <div className="hero2__wrapper1">
          <h2>Welcome To Happitravel and logisticcs</h2>
          <p>
            Happi Travel is regulated Happi Group of companies aiming travel to
            Europea countries
          </p>
          <p>
            Happi Travel is regulated Happi Group of companies aiming travel to
            Europea countries
          </p>
          <button>Learn More</button>
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
          <p>We help you Work abroad</p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Live</h2>
            <h2>02</h2>
          </div>
          <p>We help you Work abroad</p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Study</h2>
            <h2>03</h2>
          </div>
          <p>We help you Work abroad</p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Air Frieghts</h2>
            <h2>04</h2>
          </div>
          <p>We help you Work abroad</p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Sea Frieghts</h2>
            <h2>05</h2>
          </div>
          <p>We help you Work abroad</p>
        </div>
        <div className="hero2__sub">
          <div className="hero2__sub1">
            <h2 style={{ color: "#270da7" }}>Clearing And Forwarding</h2>
            <h2>06</h2>
          </div>
          <p>We help you Work abroad</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
