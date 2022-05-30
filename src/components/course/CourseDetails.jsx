import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import "./cor.css";
import Luck from "./Luck";

const data = [
  { id: 1, name: "Business Studies", score: "03", path: "/courses/1" },
  { id: 2, name: "CSE Engineering", score: "08", path: "/courses/2" },
  { id: 3, name: "Civil Engineering", score: "103", path: "/courses/civil" },
  { id: 4, name: "Banking Management", score: "01", path: "/courses/bank" },
  { id: 5, name: "Social Science", score: "20", path: "/courses/social" },
];

const data1 = [
  {
    id: 1,
    name: "Business Studies",
    countries: 'Poland, Isreal',
    score: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
  eget lectus eu quam lacinia volutpat. Vivamus varius tortor
  velit, eu lacinia ex molestie ut. In eu felis fringilla dui
  tristique faucibus non eu dui. Nunc ac feugiat orci, non lacinia
  ipsum. Pellentesque vel erat ut odio bibendum condimentum quis
  sit amet nulla. Nunc placerat rutrum risus, aliquet lacinia diam
  facilisis vel. Nullam dapibus enim blandit risus ultricies`,
    to: "1",
  },
  {
    id: 2,
    name: "CSE Engineering",
    countries: 'US, Canada',
    score: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
  eget lectus eu quam lacinia volutpat. Vivamus varius tortor
  velit, eu lacinia ex molestie ut. In eu felis fringilla dui
  tristique faucibus non eu dui. Nunc ac feugiat orci, non lacinia
  ipsum. Pellentesque vel erat ut odio bibendum condimentum quis
  sit amet nulla. Nunc placerat rutrum risus, aliquet lacinia diam
  facilisis vel. Nullam dapibus enim blandit risus ultricies`,
    to: "2",
  },
];

const Course = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const para = useParams();

  console.log(para);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ background: "whitesmoke" }}
    >
      <div className="course__container">
        <h1 style={{ color: "white", fontSize: "4rem" }}>Course Details</h1>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingBlock: "7rem",
          gap: "10px",
        }}
      >
        <div className="course__cat">
          <div>
            <h4>Select Course</h4>
            <div className="category__hey"></div>
            <div>
              <ul>
                {data.map(({ id, name, path, score }) => (
                  <li key={id}>
                    <Link to={path}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>{name}</p>
                        <p>{score}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          {data1.map(({ id, name, score, to,countries }) => {
            if (para.id === to) {
              return <Luck id={id} name={name} score={score} countries={countries} />;
            }
            return null;
          })}
        </div>

      </div>
    </motion.div>
  );
};

export default Course;
