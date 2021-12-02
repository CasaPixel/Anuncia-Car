import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";
import image1 from "../../../Assets/Catalogo/auto 1.png";
import image2 from "../../../Assets/Catalogo/auto 2.png"
import image3 from "../../../Assets/Catalogo/auto 1.png"

const cards = [
  {
    id: 1,
    title: "BEATLE 86",
    title2:"$ 00.00 MXM",
    title3:"X SEMANA",
    image: image1,
    url: "/RentarPage",
    text: "recibe texto",
  },
  {
    id: 2,
    title: "BEATLE 86",
    title2:"$ 00.00 MXM",
    title3:"X SEMANA",
    image: image2,
    url: "/RentarPage",
    text: "recibe texto",
  },
  {
    id: 3,
    title: "BEATLE 86",
    title2:"$ 00.00 MXM",
    title3:"X SEMANA",
    image: image3,
    url: "/RentarPage",
    text: "recibe texto",
  },
  {
    id: 4,
    title: "BEATLE 86",
    title2:"$ 00.00 MXM",
    title3:"X SEMANA",
    image: image1,
    url: "/RentarPage",
    text: "recibe texto",
  },
  {
    id: 5,
    title: "BEATLE 86",
    title2:"$ 00.00 MXM",
    title3:"X SEMANA",
    image: image2,
    url: "/RentarPage",
    text: "recibe texto",
  },
  {
    id: 6,
    title: "BEATLE 86",
    title2:"$ 00.00 MXM",
    title3:"X SEMANA",
    image: image3,
    url: "/RentarPage",
    text: "recibe texto",
  },{
    id: 7,
    title: "BEATLE 86",
    title2:"$ 00.00 MXM",
    title3:"X SEMANA",
    image: image1,
    url: "/RentarPage",
    text: "recibe texto",
  },
  {
    id: 8,
    title: "BEATLE 86",
    title2:"$ 00.00 MXM",
    title3:"X SEMANA",
    image: image2,
    url: "/RentarPage",
    text: "recibe texto",
  },
  {
    id: 9,
    title: "BEATLE 86",
    title2:"$ 00.00 MXM",
    title3:"X SEMANA",
    image: image3,
    url: "/RentarPage",
    text: "cada una de las partede del carro son rentables",
  },
];
const Cardcontent = styled.div `
  margin-top: 10%;
  margin-bottom: 5%;
`;
function Cards() {
  return (
      <Cardcontent>
          <div className="container-div">
            <div className="row d-flex">
            {cards.map(({ title,title2,title3, image, url, text, id }) => (
              <div className="col-md-4" key={id}>
                <Card imageSource={image} title={title} title2={title2} title3={title3} url={url} text={text} />
              </div>
            ))}
          </div>
        </div>
      </Cardcontent>
  );
}

export default Cards;