import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="center">
        <Link to="/" className="btn primary">
          Back to Home
        </Link>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
    </section>
  );
};

export default ErrorPage;
