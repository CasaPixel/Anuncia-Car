import styled from "styled-components";
import HeroImg from "../../Assets/fondo blanco.jpg";
import HeroResp from "../../Assets/fondo blanco.jpg";
import SideNav from "./Componnets/SideNav";
import Card from "./Cards/Cards";
import { useMediaQuery } from "../../hooks/UseMedeQuery";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroBase = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 500px) {
    background-image: #6c1e61 !important;
  }
`;

const HeroBackground = styled.img`
  width: 100%;
  vertical-align: top;
  @media screen and (max-width: 1120px) {
    display: grid;
    background: 100% 100%;
  }
  @media screen and (max-width: 500px) {
    display: grid;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  padding-left: 10%;
  padding-right: 10%;
  top: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;

  @media screen and (max-width: 500px) {
    position: static;
    background-color: #6c1e61 !important;
    padding: 20px !important;
  }

  @media screen and (max-width: 520px) {
    padding-top: 150px !important;
  }

  @media screen and (max-width: 900px) {
    justify-content: flex-start !important;
    padding-top: 200px;
    width: 90% !important;
  }

  @media screen and (max-width: 1040px) {
    justify-content: flex-end;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 1120px) {
    width: 100%;
  }
`;
const TitleSection = styled.div `
  margin-top: 0%;
  margin-left: 30%;
  margin-bottom: -2%;
  font-size: 35px;
  color: purple;
`;



const Hero = () => {
  const matches = useMediaQuery("(max-width: 900px)");
  return (
    <HeroBase>
      <HeroBackground src={matches ? HeroResp : HeroImg} />
      <HeroContent>
        <TitleSection><strong>Mapa de calor</strong></TitleSection>
        <form action="">
          <div>
            <Card/>
          </div>
        </form>
        <SideNav/>
      </HeroContent>
    </HeroBase>
  );
};

export default Hero;
