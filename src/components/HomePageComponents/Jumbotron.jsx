import styled from "styled-components";
import { Link } from "react-router-dom";
import OrangeButton from "../GeneralResources/Button";

const JumbotronContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 400px;
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1000px) {
    margin-top: 0;
    margin-bottom: 50%;
    background-size: cover;
  }

  @media screen and (max-width: 500px) {
    margin-top: 0;
    margin-bottom: 120%;
    background-size: cover;
  }

  @media screen and (max-width: 400px) {
    margin-top: 0px;
    margin-bottom: 200%;
    background-size: cover;
  }
`;

const JumbotronBase = styled.div`
  width: 80%;
  position: absolute;
  align-items: left;

  @media screen and (max-width: 1250px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const JumbotronTextWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  z-index: 2;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const JumbotronTitle = styled.h2`
  font-size: 50px;
  color: #e96a04;
  justify-self: end;
  text-align: end;


  @media screen and (max-width: 1000px) {
    justify-self: center;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    justify-self: center;
    text-align: center;
  }
`;

const JumbotronText = styled.p`
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 25pt;      
  justify-self: center;

  
  @media screen and (max-width: 1000px) {
    justify-self: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (max-width: 500px) {
    justify-self: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }

`;

const Jumbotron = () => {
  return (
    <JumbotronContainer>
      <JumbotronBase>
          <JumbotronTextWrapper>
            <JumbotronTitle>
              <strong>NOSOTROS</strong> <br />
              <Link to="/NosotrosPage">
              <OrangeButton text="Ver más"/>
            </Link>
            </JumbotronTitle>
            <div>
              <JumbotronText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore 
               magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                 velit esse cillum dolore eu fugiat nulla pariatur.
              </JumbotronText>
            </div>
          </JumbotronTextWrapper>
          <JumbotronTextWrapper>
            <JumbotronTitle>
              <strong>ANÚNCIATE EN</strong> <br />
            </JumbotronTitle>
            <div>
              <JumbotronText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore 
               magna aliqua. 
              </JumbotronText>
            </div>
          </JumbotronTextWrapper>
          
      </JumbotronBase>
    </JumbotronContainer>
  );
};

export default Jumbotron;
