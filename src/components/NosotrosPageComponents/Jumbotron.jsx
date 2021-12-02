import React from "react";
import styled from "styled-components";
import ImageCar from "../../Assets/Nosotros/imagen.png";
import ImageCar2 from "../../Assets/Nosotros/imagen 2.png";


const JumbotronContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 76%;
  position: relative;
  width: 95%;
  height: 100%;

  @media screen and (max-width: 1100px) {
    margin-top: 0px;
    background-size: cover;
  }
`;

const JumbotronBase = styled.div`
  width: 100%;
  position: absolute;
  align-items: left;


  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;



const JumbotronTextWrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  gap: 20px;
  z-index: 2;   
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const JumbotronTitle = styled.h2`
  font-size: 40px;
  color: #e96a04;
  text-align: left;
  margin-top: 20%;
  margin-left: 20%;

  @media screen and (max-width: 1000px) {
    justify-self: center;
    text-align: center;
  }
`;
const JumbotronTitlecar2 = styled.h2`
  font-size: 40px;
  color: #e96a04;
  text-align: left;
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;

  @media screen and (max-width: 1000px) {
    justify-self: center;
    text-align: center;
  }
`;

const JumbotronText = styled.p`
  padding-top: 10%;
  font-size: 16px;
  color: black;
  line-height: 25pt;      
  justify-self: center;
  

`;
 
const ImageDriver = styled.img `
    width: 100%;
    height: 100%;
 `;

const ImageDriver2 = styled.img `
    width: 100%;
    height: 100%;
    padding-left: 10%;
`;
const Jumbotron = () => {
  return (
    <JumbotronContainer>
      <JumbotronBase>
          <JumbotronTextWrapper>
            <JumbotronTitle>
              <strong>NOSOTROS</strong> <br />
              <JumbotronText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </JumbotronText>
            </JumbotronTitle>
            <div>
              <ImageDriver src={ImageCar}/>
            </div>
          </JumbotronTextWrapper>
          <JumbotronTextWrapper>
            <div>
              <ImageDriver2 src={ImageCar2}/>
            </div>
            <JumbotronTitlecar2>
              <strong>LOREM IPSUM</strong> <br />
              <JumbotronText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </JumbotronText>
            </JumbotronTitlecar2>
          </JumbotronTextWrapper>          
      </JumbotronBase>
    </JumbotronContainer>
  );
};

export default Jumbotron;
