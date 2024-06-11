import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: false,
  });

  const handleInputForm = (e) => {
    e.preventDefault();
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(userData);
  };

  return (
    <section className="register">
      <div className="container">
        <h2>SIGN UP</h2>
        <form className="form register__form">
          <p className="form__error-message">This is Error Mesage</p>
          <input
            type="text"
            placeholder="Full name..."
            name="name"
            value={userData.name}
            onChange={handleInputForm}
          />
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={userData.email}
            onChange={handleInputForm}
          />
          <input
            type="password"
            placeholder="Password.."
            name="password"
            value={userData.password}
            onChange={handleInputForm}
          />
          <input
            type="password"
            placeholder="Confirm password..."
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleInputForm}
          />
          <button type="submit" className="btn primary">
            Register
          </button>
          <p>
            Already have a account? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
