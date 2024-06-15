import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    error: "",
    success: false,
  });
  
// direct home page when register form request done
  const navigate = useNavigate()

  console.log(userData);

  const handleValue = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleInputForm = (e) => {
    e.preventDefault();
    // submit form
    fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      navigate('/login')
    }
    )
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section className="register">
      <div className="container">
        <h2>SIGN UP</h2>
        <form className="form register__form" onSubmit={handleInputForm}>
          <p className="form__error-message">This is Error Mesage</p>
          <input
            type="text"
            placeholder="Full name..."
            name="name"
            value={userData.name}
            onChange={handleValue}
          />
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={userData.email}
            onChange={handleValue}
          />
          <input
            type="password"
            placeholder="Password.."
            name="password"
            value={userData.password}
            onChange={handleValue}
          />
          <input
            type="password"
            placeholder="Confirm password..."
            name="password2"
            value={userData.password2}
            onChange={handleValue}
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
