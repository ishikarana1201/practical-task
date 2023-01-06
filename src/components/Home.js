import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="home-div text-center">
        <h1 className="text-center">This is home page</h1>
        <Link to="/about" className="btn btn-info m-2">
          About
        </Link>
        <Link to="/head-tail" className="btn btn-info">
          Head & Tail
        </Link>
      </div>
    </div>
  );
};

export default Home;
