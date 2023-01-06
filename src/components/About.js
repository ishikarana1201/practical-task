import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="main">
      <div className="about-div text-center">
        <div className="card col-6">
          <img
            className="card-img-top"
            src="https://www.pngmart.com/files/About-Us-PNG-Photos.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">About Us</h5>
            <p className="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
