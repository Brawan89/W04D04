import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  
  return (
    <div >
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </div>
  );
};

export default Nav;

