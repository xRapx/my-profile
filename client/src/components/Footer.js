import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="/posts/categories/:Category1">Category 1</Link>
        </li>
        <li>
          <Link to="/posts/categories/:Category2">Category 2</Link>
        </li>
        <li>
          <Link to="/posts/categories/:Category3">Category 3</Link>
        </li>
        <li>
          <Link to="/posts/categories/:Category4">Category 4</Link>
        </li>
        <li>
          <Link to="/posts/categories/:Category5">Category 5</Link>
        </li>
        <li>
          <Link to="/posts/categories/:Category6">Category 6</Link>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>All Right Reserved &copy; Copyright, My Profile</small>
      </div>
    </footer>
  );
};

export default Footer;
