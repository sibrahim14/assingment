import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
        <Link to="/">
      <h2>Innerwear Store</h2>
      </Link>
      <Link to="/Cart">
      <button className="navebar">🛒 Cart ({cartCount})</button>
       </Link>
    </nav>
  );
};

export default Navbar;
