import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "Nombre del Socio",
    text:"Correo Electrónico",
    text2:"Cuenta de banco"
  }
];

const Cards= ()=> {
  return (
      <div className="containerSPA">
          <div className="row  d-flex ">
            {cards.map(({ title, id,text, text2 }) => (
              <div className="col-md-12" key={id}>
                <Card  title={title} text={text} text2={text2}/>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Cards;