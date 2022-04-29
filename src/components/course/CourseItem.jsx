import { useParams } from "react-router-dom";

import img from "../../assets/images/4.jpg";
import { Link } from "react-router-dom";

import "./cor.css";
import React from "react";

const CourseItem = () => {
  const para = useParams();
  console.log(para);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="course__flex">
      <Link to="/courses/3">
        <div className="course__card">
          <div className="course__img">
            <img src={img} alt="hey" />
          </div>
          <div className="course__tag">
            <p>scholarship</p>
          </div>
          <div className="course__header">
            <h3 style={{ color: "#270da7" }}>Bachelor's Degree Scholarship</h3>
            <p>
              We have fully funded scholaship in Marketing, Civil Engineering
            </p>
            <button style={{ fontWeight: "bold", color: "#270da7" }}>
              Read More
            </button>
          </div>
        </div>
      </Link>

      <div className="course__card">
        <div>
          <img src={img} alt="hey" height="auto" width="auto" />
        </div>
        <div className="course__header">
          <h2 style={{ color: "#270da7" }}>Bachelor's Degree Scholarship</h2>
          <p>We have fully funded scholaship in Marketing, Civil Engineering</p>
          <button style={{ fontWeight: "bold", color: "#270da7" }}>
            Read More
          </button>
        </div>
      </div>

      <div className="course__card">
        <div>
          <img src={img} alt="hey" />
        </div>
        <div className="course__header">
          <h2 style={{ color: "#270da7" }}>Bachelor's Degree Scholarship</h2>
          <p>We have fully funded scholaship in Marketing, Civil Engineering</p>
          <button style={{ fontWeight: "bold", color: "#270da7" }}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
