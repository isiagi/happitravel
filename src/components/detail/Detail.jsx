import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../assets/images/ship1.jpeg";
import img2 from "../../assets/images/air1.jpg";
import img3 from "../../assets/images/port.jpg";
import img4 from "../../assets/images/air2.jpg";
import img5 from "../../assets/images/for.jpeg";
import img6 from "../../assets/images/save1.jpg";
import img7 from "../../assets/images/nice.jpg";

import "./detail.css";
import "../course/cor.css";
import Tr from "./Tr";

const Detail = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const para = useParams();

  const img = () => {
    switch (para.id) {
      case "air":
        return img2;
      case "water":
        return img1;
      case "passport":
        return "Passport Processing";
      case "visa":
        return img3;
      case "clear":
        return img5;
      case "permanent":
        return img6;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ background: "whitesmoke" }}
    >
      <div
        className="course__container1"
        style={{
          background: `linear-gradient(
      90deg,
      rgba(39, 13, 167, 0.7049194677871149) 0%,
      rgba(255, 254, 0, 0.6264880952380952) 99%,
      rgba(121, 119, 9, 1) 100%
    ), url(${img()})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <h1 style={{ color: "white", fontSize: "4rem" }}>
          {(() => {
            switch (para.id) {
              case "air":
                return "Air Frieght";
              case "water":
                return "Water Frieght";
              case "passport":
                return "Passport Processing";
              case "visa":
                return "Visa Processing";
              case "clear":
                return "Forwarding And Clearing";
              case "permanent":
                return "Permanent Residency";
              default:
                return null;
            }
          })()}
        </h1>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingBlock: "7rem",
          gap: "10px",
        }}
      >
        <div className="course__cat">
          <div>
            <h4>Services</h4>
            <div className="category__hey"></div>
            <div>
              <ul>
                <li>
                  <Link to="/detail/air">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Air Frieght</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/detail/water">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Water Frieght</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/detail/clear">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Clearing And Forwarding</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/detail/visa">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Visa Processing</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/detail/passport">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Passport Processing</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/detail/study">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Study Abroad</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/detail/permanent">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Permanent Disdence Abroad</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/detail/work">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Work Abroad</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {(() => {
          switch (para.id) {
            case "air":
              return <Tr title={img4} head="Air Frieght" />;
            case "water":
              return <Tr title={img1} head="Water Frieght" />;
            case "clear":
              return <Tr title={img5} head="Clearing And Forwarding" />;
            case "visa":
              return <Tr title={img3} head="Visa Processing" />;
            case "passport":
              return <Tr title={img1} head="Passport Processing" />;
            case "study":
              return <Tr title={img1} head="Study Abroad" />;
            case "work":
              return <Tr title={img1} head="Work Abroad" />;
            case "permanent":
              return <Tr title={img7} head="Permanent Residency" />;
            default:
              return <Tr title={img2} head="Air Frieght" />;
          }
        })()}
      </div>
    </motion.div>
  );
};

export default Detail;
