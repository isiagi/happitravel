import React from 'react';
import { MdTableRows } from 'react-icons/md';
import { GiCancel } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import './nav.css';

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="nav__wrapper">
      <h1>HappiTech</h1>
      <div className={`${'header'} ${open ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? 'activ' : '')}>HOME</NavLink>
          </li>
          <li>
            <div className="nav__drop">
              <button className="nav__btn">SERVICES</button>
              <div className="dropdown__menu">
                <div>
                  {/* <div class="dropdown-heading">IT SERVICES</div> */}
                  <div class="dropdown-links">
                    <NavLink to="/wire" class="link" className={({isActive}) => (isActive ? 'activ' : '')}>
                      Wireless Internet
                    </NavLink>
                    {/* <a href="/good" class="link">
                      Website / Web Hosting
                    </a> */}
                    <NavLink to="/soft" class="link">
                      Software Development
                    </NavLink>
                    <NavLink to="/" class="link">
                      IT Constancy
                    </NavLink>
                    <NavLink to="/" class="link">
                      Social and digital media marketing
                    </NavLink>
                    <NavLink to="/" class="link">
                      Computer system sales and maintenance
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? 'activ' : '')}>ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/port" className={({isActive}) => (isActive ? 'activ' : '')}>PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => (isActive ? 'activ' : '')}>CONTACT</NavLink>
          </li>
        </ul>
      </div>
      {open ? (
        <GiCancel className="toogle__icon" onClick={() => setOpen(false)} />
      ) : (
        <MdTableRows className="toogle__icon" onClick={() => setOpen(true)} />
      )}
    </div>
  );
};

export default Nav;
