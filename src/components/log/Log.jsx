import "./log.css";
import img1 from "../../assets/images/lk.jpg";
import { IoAirplaneOutline } from "react-icons/io5";
import {GiCargoShip} from 'react-icons/gi'
import {GiEarthAfricaEurope} from 'react-icons/gi'

const data = [
  {
    id: 1,
    title: "Air Frieght",
  },
  {
    id: 1,
    title: "Water Frieght",
  },
  {
    id: 1,
    title: "Clearing And Forwarding",
  },
];

const Travel = () => {
  return (
    <div className="log__container1">
      <h2
        style={{
          fontSize: "3rem",
          color: "#270da7",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        HappiLogistics
      </h2>
      <p
        style={{ color: "#433b6d", textAlign: "center", marginBottom: "2rem" }}
      >
        Let us handle your small and bulk procurements
      </p>
      <div className="log__container container">
        <div className="log__img">
          <img src={img1} alt="" />
          <div className="log__overlay"></div>
        </div>
        <div className="log__content">
          {data.map(({ id, title }) => (
            <div className="log__content__item" key={id}>
              <IoAirplaneOutline />
              <p style={{ fontSize: "2rem" }} className="log__content__para">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travel;
