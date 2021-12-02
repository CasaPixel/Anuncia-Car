import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "TEMA 1",
  },
  {
    id: 2,
    title: "TEMA 1",
  },
  {
    id: 3,
    title: "TEMA 1",
  },
  {
    id: 4,
    title: "TEMA 1",
  },
  {
    id: 5,
    title: "TEMA 1",
  },
  {
    id: 6,
    title: "TEMA 1",
  },
];

const Cards= ()=> {
  return (
      <div className="containerSP">
          <div className="row  d-flex ">
            {cards.map(({ title, id }) => (
              <div className="col-md-4" key={id}>
                <Card  title={title} />
              </div>
          ))}
        </div>
      </div>
  );
}

export default Cards;