import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <h1>The Memory Game</h1>
    {props.children}
  </div>
);


export default Header;