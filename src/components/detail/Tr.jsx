// import img from "../../assets/images/air2.jpg";
import { HiOutlineBadgeCheck } from "react-icons/hi";

import "./detail.css";
import "../course/cor.css";
import { Link } from "react-router-dom";

const Tr = ({ title, head, data, data1, services, hey }) => {
  return (
    <div>
      <div
        style={{
          maxWidth: "700px",
          color: "#433b6d",
          lineHeight: "30px",
        }}
      >
        <img
          src={title}
          alt="hey"
          style={{ width: "100%", overflow: "hidden" }}
        />
        <div>
          <div style={{ marginBlock: "3rem" }}>
            <h2 style={{color: '#270da7'}}>{head}</h2>
            <hr />
          </div>
          <p>{data}</p>
          {services && (
            <div>
              <br />
              <h2 style={{color: '#270da7'}}>What We Do For You</h2>
              <ul>
                {services.map((data, index) => (
                  <li key={index}>
                    <HiOutlineBadgeCheck /> {data}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <br />
          <p>{data1}</p>
        </div>
        <div className="detail__talk">
          <h2 style={{color: '#270da7'}}>Talk To Us</h2>
          <button><Link to='/contact'>Contact Us</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Tr;
