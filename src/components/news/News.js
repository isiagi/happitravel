import React from "react";
import img from "../../assets/images/2.jpg";

import './news.css'

const News = () => {
  return (
    <div style={{display: 'flex'}}>
      <div className="news__card news__shadow">
        <div className="news__img">
          <img src={img} alt="bag" />
        </div>
        <div className="news__tag">
          <h3>News</h3>
        </div>
        <div className="news__header">
          <p>22 April 2022</p>
          <h2 style={{color: '#270da7'}}>Bachelor's Degree Scholarship</h2>
          <p>We have fully funded scholaship in Marketing, Civil Engineering</p>
          <button style={{fontWeight: 'bold', color: '#270da7'}}>Read More</button>
        </div>
      </div>
      <div className="news__card news__shadow">
        <div className="news__img">
          <img src={img} alt="bag" />
        </div>
        <div className="news__tag">
          <h3>News</h3>
        </div>
        <div className="news__header">
          <p>22 April 2022</p>
          <h2 style={{color: '#270da7'}}>Bachelor's Degree Scholarship</h2>
          <p>We have fully funded scholaship in Marketing, Civil Engineering</p>
          <button style={{fontWeight: 'bold', color: '#270da7'}}>Read More</button>
        </div>
      </div>
      <div className="news__card news__shadow">
        <div className="news__img">
          <img src={img} alt="bag" />
        </div>
        <div className="news__tag">
          <h4>News</h4>
        </div>
        <div className="news__header">
          <p>22 April 2022</p>
          <h2 style={{color: '#270da7'}}>Bachelor's Degree Scholarship</h2>
          <p>We have fully funded scholaship in Marketing, Civil Engineering</p>
          <button style={{fontWeight: 'bold', color: '#270da7'}}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default News;
