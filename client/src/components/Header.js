/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/image/logo2.jpg";
import { AuthContext } from "../context/userContext";

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(
    window.innerWidth > 800 ? true : false
  );
  const [name, setName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [users, setUsers] = useState(false)

  const { logout,user } = useContext(AuthContext);

  useEffect(() => {
    if (location.state && location.state.user) {
      setName(location.state.user.name);
      setUsers(true)
    }
  }, [location,users]);

  console.log(isNavShow);
  console.log(location);

  const closeNav = () => {
    if (window.innerWidth < 800) {
      setIsNavShow(false);
    } else {
      setIsNavShow(true);
    }
  };

  const handleProfileClick = () => {
    navigate(`/profile/${name}`, { state: location.state });
  };
  const handleLogoutClick = () => {
    logout();
    closeNav();
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNav}>
          <img src={logo} alt="My Logo" className="nav__img" />
        </Link>
        {isNavShow && (
          <ul className="nav__menu">
           {users ? 
           ( <>
             <li>
                <Link
                  to={`/profile/${name}`}
                  onClick={(e) => {
                  e.preventDefault();
                  handleProfileClick();
                  closeNav();
                  }}
                  >
                  <strong>{`Hello : ${name} `}</strong>{" "}
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
                <Link onClick={handleLogoutClick}>Logout</Link>
              </li>
            </>) : (
              <>
                <li>
                <Link to="/login" onClick={closeNav}>
                    Login
                </Link>
              </li>
              <li>
                <Link to="/register" onClick={closeNav}>
                  Register
                </Link>
              </li>
              </>
            )}
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
