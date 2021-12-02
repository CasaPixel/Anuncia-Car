import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "Formulario de seguimiento",
    text:"Fecha de seguimiento",
    text2:"Link o imágen de seguimiento"
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