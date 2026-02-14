import React from "react";
import "./Card.css";


function Card({ image, title, description, buttonText }) {
  return (
    <div className="card">
      <img src={"image"} alt="card" className="card-img" />

      <h2 className="card-title">{title}</h2>

      <p className="card-description">{description}</p>

      <button className="card-btn">{buttonText}</button>
    </div>
  );
}

export default Card;


