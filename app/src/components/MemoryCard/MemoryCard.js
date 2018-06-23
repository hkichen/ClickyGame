import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
  <div className='card'>
    <div className='img-container' onClick={() => props.shuffleCards(props.name)}>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
)

export default MemoryCard;
