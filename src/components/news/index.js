import React from "react";
import News from "./News";

import './news.css'

const index = () => {
  return (
    <div className="news__index">
      <div style={{ textAlign: "center", maxWidth: "500px" }}>
        <h2 style={{ fontSize: "3rem", color: '#270da7' }}>Our Lastest News</h2>
        <p style={{ paddingBlock: "2rem" }}>
          Happi Travel is regulated Happi Group of companies aiming travel to
          Europea countries
        </p>
      </div>
      <News />
    </div>
  );
};

export default index;
