import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container_2">
        <div className="main_pg ">
          <h2>TechnoMania</h2>
          <nav className="navbar">
            <ul className="navbar_menu">
              <li className="menu">
                <Link to="/home">Home</Link>
              </li>
              <li className="menu">
                <Link to="/products">Products</Link>
              </li>
              <li className="menu">
                <Link>About</Link>
              </li>
              <li className="menu">
                <Link>Checkout</Link>
              </li>
              <li className="menu">
                <Link>contact</Link>
              </li>
              <li className="menu">
                <Link to="/AdminPage">Admin Page</Link>
              </li>
            </ul>
          </nav>
          <li className="menu">
            <Link to="/register">REGISTER</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
