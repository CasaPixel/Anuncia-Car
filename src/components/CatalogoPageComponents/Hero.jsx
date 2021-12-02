import styled from "styled-components";
import HeroImg from "../../Assets/Catalogo/Hero image.jpg";
import HeroResp from "../../Assets/Catalogo/Hero image.jpg";
import { useMediaQuery } from "../../hooks/UseMedeQuery";

const HeroBase = styled.div`
  position: relative;
  width: 100%;

  @media screen and (max-width: 500px) {
    background-image: #6c1e61 !important;
  }
`;

const HeroBackground = styled.img`
  width: 100%;
  vertical-align: top;
  @media screen and (max-width: 500px) {
    display: grid;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 5%;
  width: 46%;
  height: 100%;
  left: 9%;
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
    left: 20px;
    width: 50%;
  }
`;


const HeroTitle = styled.h1`
  font-size: 50px;
  line-height: 50px;
  margin-bottom: 10px;

  @media screen and (max-width: 970px) {
    font-size: 30px !important;
  }

  @media screen and (max-width: 1300px) {
    font-size: 45px;
  }
`;


const Hero = () => {
  const matches = useMediaQuery("(max-width: 900px)");
  return (
    <HeroBase>
      <HeroBackground src={matches ? HeroResp : HeroImg} />
      <HeroContent>
        <HeroTitle>
            <strong>CATÁLOGO</strong>
        </HeroTitle>
      </HeroContent>
    </HeroBase>
  );
};

export default Hero;
