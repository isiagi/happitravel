import { GiCargoShip } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./service.css";

const Service = () => {
  const services = [
    { id: 1, title: "SEA FREIGH", link: "/detail/air" },
    { id: 2, title: "WATER FREIGH", link: "/detail/water" },
    { id: 3, title: "FORWARDING AND CLEARANCE", link: "/detail/clear" },
    { id: 4, title: "PASSPORT PROCESSING", link: "/detail/passport" },
    { id: 5, title: "VISA PROCESSING", link: "/detail/visa" },
    { id: 6, title: "AIR TICKET PROCESSING" },
    { id: 7, title: "STUDY ABROAD", link: "/detail/study" },
    { id: 8, title: "PERMANENT RESIDENCE ABROAD", link: "/detail/permanent" },
    { id: 9, title: "WORK ABROAD", link: "/detail/work" },
  ];
  return (
    <div className="service__container">
      <h1 style={{ textAlign: "center", padding: "9rem 0" }}>Our Services</h1>
      <div className="service__grid">
        {services.map(({ id, title, link }) => (
          <Link to={`${link}`}>
            <div className="service__wraper" key={id}>
              <div className="service__icon">
                <GiCargoShip />
              </div>
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
