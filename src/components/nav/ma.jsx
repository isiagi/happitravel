import React from "react";
import { BsBookHalf } from "react-icons/bs";

import "./ma.css";

const ma = () => {
  return (
    <div className="nav__conatiner">
    <div className="place__items__center">

      <BsBookHalf style={{fontSize: '3rem'}}/>
      <h1>HappiTravel</h1>
    </div>
      <div>
        <ul className="nav__links">
          <li>Home</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default ma;
