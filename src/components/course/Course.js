import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import "./cor.css";

const Course = () => {
  const para = useParams();

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log(para);
  return (
    <div style={{ background: "whitesmoke" }}>
      <div className="course__container">
        <h1 style={{ color: "white", fontSize: "4rem" }}>Our Courses</h1>
      </div>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", paddingBlock: "7rem" }}
      >
        <div className="course__cat">
          <div>
            <h4>Category</h4>
            <div className="category__hey"></div>
            <div>
              <ul>
                <li>
                  <Link to="/courses/studies">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Business Studies</p>
                      <p>03</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/courses/cse">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>CSE Engineering</p>
                      <p>08</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/courses/civil">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Civil Engineering</p>
                      <p>10</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/courses/bank">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Banking Management</p>
                      <p>01</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/courses/social">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Social Science</p>
                      <p>20</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Course;
