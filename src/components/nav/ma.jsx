import { useState } from "react";
import { BsBookHalf } from "react-icons/bs";
import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

import { Link } from "react-router-dom";

import "./ma.css";

const Ma = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav__conatiner">
      <Link to="/">
        <div className="place__items__center">
          <BsBookHalf style={{ fontSize: "3rem" }} />
          <h1>HappiTravel</h1>
        </div>
      </Link>
      <div className="place__header">
      <div className={`${'place__content'} ${open ? 'active' : ''}`}>
        <ul className="nav__links">
          <li onClick={() => setOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/courses/studies">Courses</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
      {open ? (
        <GiCancel className="toogle__icon" onClick={() => setOpen(false)} />
      ) : (
        <MdTableRows className="toogle__icon" onClick={() => setOpen(true)} />
      )}
    </div>
  );
};

export default Ma;
