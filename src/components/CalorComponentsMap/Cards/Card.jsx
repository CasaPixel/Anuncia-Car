import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./card.css";

const Card= ({ title, text, text2 }) => {
  return (
    <div className="cardSP text-center">
      <div className="card-bodySP ">
        <h4 className="card-title"><strong>{title}</strong></h4>
        
        <form >
                        <div > 
                        <p className="card-text text-dark">
                          {text 
                            ? text
                            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
                        </p>
                            <input type="date" className="form-control " placeholder="Fecha de registro" />
                        </div>
                        <br/>
                        <div >
                        <p className="card-text text-dark">
                          {text2 
                            ? text2
                            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
                        </p>
                            <i class="icon-search"></i>
                            <input type="text" className="form-control" placeholder="Link de seguimiento" />
                        </div>
                        <br/>                
                        <div>
                            <i class="icon-search"></i> 
                            <input type="file"  className="form-control" placeholder="Elige el archivo de evidencia" />
                        </div>
                        <br/>

                        <div>                            
                            <Link to="/SociosHome">
                                <center><button type="submit" className="btn-submit ">Enviar</button></center>
                            </Link>
                            <Link to="/SociosHome">
                                <center><a className="RegistroCS" href="/SociosHome">Volver</a></center>
                            </Link>
                        </div>
                    </form>                     
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  text2: PropTypes.string,
  
};

export default Card;