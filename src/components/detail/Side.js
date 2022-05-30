import React from "react";
import { Link } from "react-router-dom";

import "./detail.css";
import "../course/cor.css";

const data = [
  { id: 1, name: "Air Frieght", path: "/detail/air" },
  { id: 2, name: "Water Frieght", path: "/detail/water" },
  { id: 3, name: "Clearing And Forwarding", path: "/detail/clear" },
  { id: 4, name: "Visa Processing", path: "/detail/visa" },
  { id: 5, name: "Passport Processing", path: "/detail/passport" },
  { id: 6, name: "Study Abroad", path: "/detail/study" },
  { id: 7, name: "Permanent Residence Abroad", path: "/detail/permanent" },
  { id: 8, name: "Work Abroad", path: "/detail/work" },
];

const Side = () => {
  return (
    <div className="course__cat">
      <div>
        <h4>Services</h4>
        <div className="category__hey"></div>
        <div>
          <ul>
            {data.map(({ id, name, path }) => (
              <li key={id}>
                <Link to={path}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{name}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Side;
