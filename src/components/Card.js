import React from "react";

const Card = ({ name, email, id }) => {
  let image = null;
  try {
    image = require(`../img/${id}.jpg`);
  } catch (err) {
    // Image does not exist.
  }

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={image} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
