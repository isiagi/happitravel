import { GiCargoShip } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./service.css";
import { SiYourtraveldottv } from "react-icons/si";
import { FaHotel } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { MdNightsStay } from "react-icons/md";
import { IoAirplaneOutline } from "react-icons/io5";
import { GiEarthAfricaEurope } from "react-icons/gi";
import React from "react";

const services = [
  { id: 1, title: "SEA FREIGH", link: "/detail/air", icon: <GiCargoShip /> },
  {
    id: 2,
    title: "AIR FREIGH",
    link: "/detail/water",
    icon: <IoAirplaneOutline />,
  },
  {
    id: 3,
    title: "FORWARDING AND CLEARANCE",
    link: "/detail/clear",
    icon: <GiEarthAfricaEurope />,
  },
  {
    id: 4,
    title: "PASSPORT PROCESSING",
    link: "/detail/passport",
    icon: <FaPassport />,
  },
  {
    id: 5,
    title: "VISA PROCESSING",
    link: "/detail/visa",
    icon: <IoAirplaneOutline />,
  },
  { id: 6, title: "AIR TICKET PROCESSING", icon: <GrUserWorker /> },
  {
    id: 7,
    title: "STUDY ABROAD",
    link: "/detail/study",
    icon: <SiYourtraveldottv />,
  },
  {
    id: 8,
    title: "PERMANENT RESIDENCE ABROAD",
    link: "/detail/permanent",
    icon: <MdNightsStay />,
  },
  { id: 9, title: "WORK ABROAD", link: "/detail/work", icon: <GrUserWorker /> },
];

const Service = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service__container container" id="service">
      <h1 style={{ textAlign: "center", padding: "9rem 0", color: "#fff" }}>
        Our Services
      </h1>
      <div className="service__grid">
        {services.map(({ id, title, link, icon }) => (
          <Link to={`${link}`}>
            <div className="service__wraper" key={id}>
              <div className="service__icon">{icon}</div>
              <div>
                <h2>{title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Service;
