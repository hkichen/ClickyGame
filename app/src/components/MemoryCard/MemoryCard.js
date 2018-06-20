import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
  <div className='card'>
    <div className='img-container'>
      <span onClick={() => props.changeStatus(props.clicked)}> <img alt={props.name} src={props.image} /> </span>
    </div>
  </div>
)

export default MemoryCard;
