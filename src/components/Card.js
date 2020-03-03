import React from "react";

const Card = ({ name, email, id }) => {
  let image = null;
  try {
    image = require(`../img/${id}.jpg`);
  } catch (err) {
    // Image does not exist.
  }

  return (
    <div className="card tc">
      <img src={image} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
