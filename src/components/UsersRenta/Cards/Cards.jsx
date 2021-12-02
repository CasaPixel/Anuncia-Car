import React from "react";
import Card from "./Card";


const cards = [
  {
    id: 1,
    title: "Coche 1",
    text:"Fecha de registro",
    text2:"2 semanas",
    text3:"PRECIO",
  },
  {
    id: 2,
    title: "Coche 2",
    text:"Fecha de registro",
    text2:"3 semanas",
    text3:"PRECIO",
  },
  {
    id: 3,
    title: "Coche 3",
    text:"Fecha de registro",
    text2:"1 semana",
    text3:"PRECIO",
  },
  {
    id: 4,
    title: "Coche 4",
    text:"Fecha de registro",
    text2:"5 semanas",
    text3:"PRECIO",
  },
  {
    id: 5,
    title: "Coche 5",
    text:"Fecha de registro",
    text2:"8 semanas",
    text3:"PRECIO",
  },
  {
    id: 6,
    title: "Coche 6",
    text:"Fecha de registro",
    text2:"10 semanas", 
    text3:"PRECIO", 
  },
];

const Cards= ()=> {
  return (
      <div className="containerSPA">
          <div className="row  d-flex ">
            {cards.map(({ title, id,text, text2, text3 }) => (
              <div className="col-md-4" key={id}>
                <Card  title={title} text={text} text2={text2} text3={text3}/>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Cards;