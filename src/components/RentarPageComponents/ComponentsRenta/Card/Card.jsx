import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({  title,title2,title3, text }) {
  return (
    <div className="card1image text-center" >
      <div className="card-body1image">
            <div className="middleimage">
              <h4 className="card-title1image"><strong>{title}</strong></h4>
            </div>
            <div className="parrafo-textImage">
              <p className="card-title1image"><strong>{title}</strong></p>
              <p className="card-title2image"><strong>{title2}</strong></p>
              <p className="card-title3image"><strong>{title3}</strong></p>
              <p className="card-text1image text-dark">
                <strong>{text ? text : "Lorem ipsum "}</strong> 
              </p>
            </div>
        </div>        
      </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Card;