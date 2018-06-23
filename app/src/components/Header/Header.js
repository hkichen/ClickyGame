import React from "react";
import "./Header.css";

const Header = props => (
  <div className="gameScore">
    <h3 className="score">Your Score: {props.total} || High Score: {props.highscore}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Header;