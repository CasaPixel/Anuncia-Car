import React from "react";
import { Link } from "react-router-dom";
import Card from "./Cardresources/Cards";
import OrangeButton from "../GeneralResources/Button";
import image1 from "../../Assets/Home/Card1.png";
import image2 from '../../Assets/Home/Card1.png'
import image3 from '../../Assets/Home/Imagen 3.png'

const cards = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  
];


 
function Cards() {




  
  return (
   
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="elements">
        <div className="row ">
            {cards.map(({ image, id }) => (
            <div className="col-md-4 " key={id}>
                <Card imageSource={image} />
            </div>
            ))}
        </div>
S
        
      <div className="orange">
        <Link to="/CatalogoPage">
            <OrangeButton text="Ver todos"/>
        </Link>
      </div>
      </div>
    </div>
    
  );
}

export default Cards;