import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import OrangeButton from "../../GeneralResources/Button";
import "./card.css";

const Card= ({ title, text, text2, text3 }) => {
  return (
    <div className="cardSP text-center">
      <div className="card-bodySP ">
        <h4 className="card-title"><strong>{title}</strong></h4>
        <lu>
          <li>
              <p className="card-text text-dark">
              {text 
                ? text
                : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
            </p>
              <p className="card-text text-dark">
              {text2 
                ? text2
                : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
            </p>
            <p className="card-text text-dark">
              {text3 
                ? text3
                : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
            </p>
            <Link to="/CalorMap">
              <OrangeButton text="Mapa de calor"/>
            </Link>
          </li>
        </lu>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  
};

export default Card;