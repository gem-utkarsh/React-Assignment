import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h2>404</h2>
        <h3>UH OH! You're lost.</h3>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Link to={"/"} className="btn btn-primary mx-3">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
