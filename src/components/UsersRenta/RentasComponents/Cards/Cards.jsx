import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "Renta 1",
    text:"Fecha de registro",
    text2:"2 semanas"
  },
  {
    id: 2,
    title: "Renta 2",
    text:"Fecha de registro",
    text2:"3 semanas"
  },
  {
    id: 3,
    title: "Renta 3",
    text:"Fecha de registro",
    text2:"1 semana"
  },
  {
    id: 4,
    title: "Renta 4",
    text:"Fecha de registro",
    text2:"5 semanas"
  },
  {
    id: 5,
    title: "Renta 5",
    text:"Fecha de registro",
    text2:"8 semanas"
  },
  {
    id: 6,
    title: "Renta 6",
    text:"Fecha de registro",
    text2:"10 semanas"
  },
];

const Cards= ()=> {
  return (
      <div className="containerSPA">
          <div className="row  d-flex ">
            {cards.map(({ title, id,text, text2 }) => (
              <div className="col-md-4" key={id}>
                <Card  title={title} text={text} text2={text2}/>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Cards;