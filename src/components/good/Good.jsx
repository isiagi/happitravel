import { SiYourtraveldottv } from "react-icons/si";
import { FaHotel } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";
import { IoAirplaneOutline } from "react-icons/io5";
import { GiCargoShip } from "react-icons/gi";
import { GiEarthAfricaEurope } from "react-icons/gi";
import "./good.css";

const Good = () => {
  return (
    <div className="good__container container">
      <h1 style={{color: '#fff', textAlign: 'center',paddingBlock: '3rem'}}>Our Categorized Services That We Offer</h1>
      <div className="good__grid">
        <div className="container good__context">
        <h2 style={{color: '#fffe00'}}>Travel Services</h2>
          <div className="good__flex">
            <SiYourtraveldottv className="icon" />
            <h3>Study (US, Canada, Hungray, Poland and Isreal)</h3>
          </div>
          <div className="good__flex">
            <FaHotel className="icon" />
            <h3>Work Abroad (US, Canada, Hungray, Poland and Isreal)</h3>
          </div>
          <div className="good__flex">
            <FaHotel className="icon" />
            <h3>Hotel Reservations (Anywhere in the world)</h3>
          </div>
          <div className="good__flex">
            <FaPassport className="icon" />
            <h3>Passport and Visa Processing</h3>
          </div>
          <div className="good__flex">
            <MdNightsStay className="icon" />
            <h3>Permanent Residence Abroad</h3>
          </div>
          <div className="good__flex">
            <GiEarthAfricaEurope className="icon" />
            <h3>Travel packages</h3>
          </div>
        </div>
        <div className="container good__context">
        <h2 style={{color: '#fffe00'}}>Logistics Services</h2>
        <div className="good__flex">
            <GiCargoShip className="icon" />
            <h3>Cargo Pickups (China, Dubia, Turkey)</h3>
          </div>
          <div className="good__flex">
            <GiCargoShip className="icon" />
            <h3>Water Frieghts (China, Dubia, Turkey)</h3>
          </div>
          <div className="good__flex">
            <IoAirplaneOutline className="icon" />
            <h3>Air Frieghts (China, Dubia, Turkey)</h3>
          </div>
          <div className="good__flex">
            <FaPassport className="icon" />
            <h3>Clearing And Forwarding</h3>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Good;
