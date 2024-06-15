import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/userContext";

const Login = () => {
  const [userData, setUserData] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dataForm = {
    email: email,
    password: password,
  };
  const navigate = useNavigate();

  const contextUser = useContext(AuthContext);
  
  const { login } = contextUser;


  console.log(userData);

  const handleInputForm = (e) => {
    e.preventDefault();
    setUserData(dataForm);
    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })
      .then((res) => res.json())
      .then((data) => {
        login(data);
        if (data) {
          navigate("/", {
            state: data,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="login">
      <div className="container">
        <h2>LOG IN</h2>
        <form className="form login__form" onSubmit={handleInputForm}>
          <p className="form__error-message">This is Error Mesage</p>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password.."
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
