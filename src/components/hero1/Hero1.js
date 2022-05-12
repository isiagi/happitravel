import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import "./hero1.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/travel.webp";
import img3 from "../../assets/images/port.jpg";

const Hero1 = () => {
  const data = [
    {
      id: 1,
      img: img1,
      head: "WORK, STAY AND STUDY ABROAD",
      para: "Your study abroad begins here",
    },
    {
      id: 2,
      img: img2,
      head: "PICK UP, FREIGHTS AND CLEARANCE",
      para: "Your logistics grow and begin here",
    },
    {
      id: 3,
      img: img3,
      head: "PASSPORT, AIRTICKET AND VISA PROCESSING",
      para: "Your journeys begin here",
    },
  ];

  return (
    <Fade arrows={false} duration={3000}>
      {data.map(({ id, img, head, para }) => (
        <div
          className="hero__container"
          style={{
            background: `linear-gradient(
      90deg,
      rgba(39, 13, 167, 0.7049194677871149) 0%,
      rgba(255, 254, 0, 0.6264880952380952) 99%,
      rgba(121, 119, 9, 1) 100%
    ), url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            key: { id },
          }}
        >
          <div className="hero__wrapper">
            <h1>{head}</h1>
            <p>{para}</p>
            <button>
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      ))}
    </Fade>
  );
};

export default Hero1;
