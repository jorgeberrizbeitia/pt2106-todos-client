import React from "react";
import { NavLink } from "react-router-dom";

const containerStyles = {
  display: "flex",
  justifyContent: "space-evenly",
};

const linkStyles = {
  textDecoration: "none",
};

const activeStyles = {
  textDecoration: "underline",
};

function Navbar() {
  return (
    <div style={containerStyles}>
      <NavLink 
        to="/"
        style={linkStyles} 
        activeStyle={activeStyles} 
        exact
      >
        <h1>List</h1>
      </NavLink>

      <NavLink 
        to="/add-form"
        style={linkStyles} 
        activeStyle={activeStyles} 
      >
        <h1>Add</h1>
      </NavLink>
    </div>
  );
}

export default Navbar;
