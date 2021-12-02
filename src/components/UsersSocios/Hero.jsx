import styled from "styled-components";
import { Link } from "react-router-dom";
import OrangeButton from "../GeneralResources/Button";
import HeroImg from "../../Assets/fondo form socios.jpg";
import HeroResp from "../../Assets/fondo form socios.jpg";
import { useMediaQuery } from "../../hooks/UseMedeQuery";

const HeroBase = styled.div`
  position: relative;
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
  top: 0%;
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


const Hero = () => {
  const matches = useMediaQuery("(max-width: 900px)");
  return (
    <HeroBase>
      <HeroBackground src={matches ? HeroResp : HeroImg} />
      <HeroContent>
        <center>  <h1>Gracias por registrarse, en un lapso de 72 horas recibirás mediante tu correo electrónico tu usuario 
                     y contraseña</h1> </center>
        <center>  <h7>(Revisa tus apartados de span y correos no deseados en caso de que no se visualice en la bandeja de entrada)</h7> </center>
        <Link to="/HomePage">
          <br />
          <center> <OrangeButton text="Finalizar registro" /></center>
        </Link>
      </HeroContent>
    </HeroBase>
  );
};

export default Hero;
