import React from "react";
import PropTypes from "prop-types";

import "./Cards.css";

function Card({ imageSource}) {
  return (
    <div className="card text-center  animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      </div>
  );
}

Card.propTypes = {
  imageSource: PropTypes.string
};

export default Card;