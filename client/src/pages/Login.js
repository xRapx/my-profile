import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
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
    <section className="login">
      <div className="container">
        <h2>LOG IN</h2>
        <form className="form login__form">
          <p className="form__error-message">This is Error Mesage</p>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={userData.email}
            onChange={handleInputForm}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password.."
            name="password"
            value={userData.password}
            onChange={handleInputForm}
          />
          <button type="submit" className="btn primary">
            Log In
          </button>
          <p>
            Don't have a account? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
