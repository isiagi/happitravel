import React from "react";
import img from "../../assets/images/2.jpg";

import {latestNews} from '../../utils/data'

import './news.css'

const News = () => {
  return (
    <div className="course__fl">
    {latestNews.map(({img, head, content, tag, id}) => {
      return (
        <div key={id} className="news__card news__shadow">
        <div className="news__img">
          <img src={img} alt="bag" />
        </div>
        <div className="news__tag">
          <h3>{tag}</h3>
        </div>
        <div className="news__header">
          <p>22 April 2022</p>
          <h2 style={{color: '#270da7'}}>{head}</h2>
          <p>{content}</p>
          <button style={{fontWeight: 'bold', color: '#270da7'}}>Read More</button>
        </div>
      </div>
      )
    })}
    </div>
  );
};

export default News;
