import img from "../../assets/images/4.jpg";
import { Link } from "react-router-dom";

import { Business } from "../../utils/data";

import "./cor.css";
import React from "react";

const CourseItem = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="course__flex">
      
      {Business.map((item) => {
        return (
          <Link to={`/courses/${item.id}`}>
            <div className="course__card">
              <div>
                <img src={img} alt="hey" height="auto" width="auto" />
              </div>
              <div className="course__header">
                <h2 style={{ color: "#270da7" }}>
                  Bachelor's Degree Scholarship
                </h2>
                <p>
                  We have fully funded scholaship in Marketing, Civil
                  Engineering
                </p>
                <button style={{ fontWeight: "bold", color: "#270da7" }}>
                  Read More
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CourseItem;
