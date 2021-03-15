import React from "react";

const Card = ({ 
  cardColor, 
  title, 
  description, 
  image 
}) => {
  return (
    <div className={`card ${cardColor}`}>
      <div className="card-title dark-text semi-bold">{title}</div>
      <div className="card-description muted-text description-size">{description}</div>
      <img className="card-image" src={image} alt=""/>
    </div>
  );
};

export default Card;
