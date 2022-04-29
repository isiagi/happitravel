
import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/images/1.jpg";

import "./cor.css";

const Course = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div style={{ background: "whitesmoke" }}>
      <div className="course__container">
        <h1 style={{ color: "white", fontSize: "4rem" }}>Course Details</h1>
      </div>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", paddingBlock: "7rem", gap: "10px" }}>
      
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

        <div>
          <div style={{maxWidth: '700px',color: '#433b6d', lineHeight: '30px'}}>
            <img src={img} alt="hey" />
            <div>
            <div style={{marginBlock: '3rem'}}>
              <h2>Bachelors Degree In Computer Science</h2>
              <hr />
            </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                eget lectus eu quam lacinia volutpat. Vivamus varius tortor
                velit, eu lacinia ex molestie ut. In eu felis fringilla dui
                tristique faucibus non eu dui. Nunc ac feugiat orci, non lacinia
                ipsum. Pellentesque vel erat ut odio bibendum condimentum quis
                sit amet nulla. Nunc placerat rutrum risus, aliquet lacinia diam
                facilisis vel. Nullam dapibus enim blandit risus ultricies
                interdum. Donec sit amet interdum erat. In euismod risus vel
                lorem eleifend aliquam. Aenean sodales sodales felis. Integer
                accumsan magna ac venenatis pretium. Duis congue elit et odio
                egestas tristique. Cras blandit diam ligula, a maximus tortor
                sagittis ut. Maecenas eget justo sit amet nibh interdum
                consectetur. Vivamus vulputate, elit eu facilisis laoreet, risus
                justo gravida metus, eget luctus ligula dolor non velit.
              </p>
              <br />
              <p>
                Phasellus eu urna venenatis, pretium dolor nec, ultricies
                ligula. Donec purus urna, hendrerit nec nisi vel, scelerisque
                porta nibh. Nulla elementum sit amet tellus quis tristique. Nunc
                pharetra enim dictum convallis auctor. Mauris feugiat justo vel
                imperdiet pharetra. Sed cursus quam lacus, quis placerat est
                luctus vel. Duis vehicula pellentesque quam, vitae porta arcu
                eleifend in. Vivamus interdum, tortor quis tempus vehicula,
                neque nisl volutpat ligula, a tincidunt tellus leo et mauris.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Phasellus ut mi velit. Donec
                aliquet non ante non hendrerit. Aliquam condimentum nibh non
                iaculis pulvinar. Cras suscipit porttitor nisl eu semper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
