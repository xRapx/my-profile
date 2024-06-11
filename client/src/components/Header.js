/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/image/logo2.jpg";

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(
    window.innerWidth > 800 ? true : false
  );
  console.log(isNavShow);

  const closeNav = () => {
    if (window.innerWidth < 800) {
      setIsNavShow(false);
    } else {
      setIsNavShow(true);
    }
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNav}>
          <img src={logo} alt="My Logo" className="nav__img" />
        </Link>
        {isNavShow && (
          <ul className="nav__menu">
            <li>
              <Link to="/profile/abc123" onClick={closeNav}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNav}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNav}>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNav}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShow(!isNavShow)}
        >
          {isNavShow ? <AiOutlineClose onClick={closeNav} /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
