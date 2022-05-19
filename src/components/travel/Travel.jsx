import "./travel.css";
import img1 from "../../assets/images/trav.jpg";
import {SiYourtraveldottv} from 'react-icons/si'
import {FaHotel} from 'react-icons/fa'
import {FaPassport} from 'react-icons/fa'
import {GrUserWorker} from 'react-icons/gr'
import {MdNightsStay} from 'react-icons/md'


const data = [
  {
    id: 1,
    title: "Study Abroad",
  },
  {
    id: 2,
    title: "Work Abroad",
  },
  {
    id: 3,
    title: "Permanent Residence Abroad",
  },
  {
    id: 4,
    title: "Passport And Visa Processing",
  },
  {
    id: 5,
    title: "Hotel Reservations",
  },
  {
    id: 6,
    title: "Travel Packages Abroad",
  },
];

const Travel = () => {
  return (
    <div className="travel__container1">
      <h2
        style={{
          fontSize: "3rem",
          textAlign: "center",
          paddingTop: "2rem",
          color: "#270da7"
        }}
      >
        HappiTravel
      </h2>
      <p
        style={{  color: "#270da7", textAlign: "center", marginBottom: "2rem" }}
      >
        Let us handle your small and bulk procurements
      </p>
      <div className="travel__container container">
        <div className="travel__img">
          <img src={img1} alt="" />
          <div className="travel__overlay"></div>
        </div>
        <div className="travel__content">
          {data.map(({ id, title }) => (
            <div className="travel__content__item" key={id}>
              <div className="travel__content__star">
                <p
                  style={{ textAlign: "center", marginTop: "10px", zIndex: 1 }}
                >
                  H
                </p>
              </div>
              <p style={{ fontSize: "2rem" }} className="travel__content__para">
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
