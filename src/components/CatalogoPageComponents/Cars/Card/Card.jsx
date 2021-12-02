import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title,title2,title3, text, url }) {
  return (
    <div className="card1 text-center bg-white" style={{ width: '25rem' }}>
      <div className="overflow">
          <div className="button-hover">
            <img src={imageSource} alt="a wallpaper" className="card-img-top1"/>
            <buttoon className="boton">
                 <a href={url ? url : "#!"} className="btn1 btn-outline-secondary border-0" rel="noreferrer" >
                Rentar
            </a>
            </buttoon>
          </div>
      </div>
      <div className="card-body1 text-light">
        <div className="middle">
          <div ><h4 className="card-title1"><strong>{title}</strong></h4></div>
          <div ><h4 className="card-title2"><strong>{title2}</strong></h4></div>
        </div>
        <div className="Descripcion">
            <div className="parrafo-text">
              <h4 className="card-title3"><strong>{title3}</strong></h4>
              <p className="card-text1 text-dark">
                <strong>Rento</strong>: {text ? text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
              </p>
            </div>
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
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;