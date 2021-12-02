import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card= ({ title, text }) => {
  return (
    <div className="cardSP text-center">
      <div className="card-bodySP ">
        <h4 className="card-title"><strong>{title}</strong></h4>
        <p className="card-text text-dark">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  
};

export default Card;