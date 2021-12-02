import React from "react";
import Card from "./Card/Card";

const cards = [
  {
    id: 1,
    title: "Ancho",
    title2:"23.00 cm",
    title3:"Alto",
    text: "56.6 cm",
  },
  {
    id: 2,
    title: "Ancho",
    title2:"23.00 cm",
    title3:"Alto",
    text: "56.6 cm",
  },{
    id: 3,
    title: "Ancho",
    title2:"23.00 cm",
    title3:"Alto",
    text: "56.6 cm",
  },{
    id: 4,
    title: "Ancho",
    title2:"23.00 cm",
    title3:"Alto",
    text: "56.6 cm",
  },
];
function Cards() {
  return (
          <div className="container-div">
            <div className="row d-flex">
            {cards.map(({ title,title2,title3, text, id }) => (
              <div className="col-md-4" key={id}>
                <Card title={title} title2={title2} title3={title3}  text={text} />
              </div>
            ))}
          </div>
        </div>
  );
}

export default Cards;