import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="score">Your Score: {props.score} || High Score: {props.highscore}
      <h3 className="status">{props.status}</h3>
    </div>
  </div>
);

export default Header;