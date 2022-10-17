import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../context/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { signut, usre } = useContext(Authcontext);
  const logourtbtn = () => {
    signut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>

        {usre?.uid ? (
          <button onClick={logourtbtn} className="logout">
            log out
          </button>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}

      </div>
    </nav>
  );
};

export default Header;
