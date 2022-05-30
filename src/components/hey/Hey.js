import "./hey.css";
import img from "../../assets/images/yea.jpg";

const Hey = () => {
  return (
    <div className="container">
    <h2 style={{textAlign: 'center', color: '#fffe00', fontSize: '2em', marginBlock: '1.5em'}}>Move Your Cargo Safe and Efficient With Us</h2>
      <div className="hey__grid">
        <div>
          <ul>
            <li>
              <span className="span__text">01</span>Airline Shipment
            </li>
            <li>
              <span className="span__text">02</span>Water Shipment
            </li>
            <li>
              <span className="span__text">03</span>Land Transportation
            </li>
            <li>
              <span className="span__text">04</span>Forwarding And Clearing
            </li>
          </ul>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hey;
