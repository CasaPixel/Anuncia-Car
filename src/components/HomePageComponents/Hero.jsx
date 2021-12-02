import styled from "styled-components";
import { Link } from "react-router-dom";
import HeroImg from "../../Assets/Home/hero image.jpg";
import HeroResp from "../../Assets/Home/hero image.jpg";
import { useMediaQuery } from "../../hooks/UseMedeQuery";
import OrangeButton from "../GeneralResources/Button";

const HeroBase = styled.div`
  position: relative;
  width: 100%;

  @media screen and (max-width: 500px) {
    margin-bottom: 60%;
    background-image: #390044 !important;
    background-size: 100% 100%;
  }
`;

const HeroBackground = styled.img`
  width: 100%;
  vertical-align: top;

  @media screen and (max-width: 1450px) {
    display: grid;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 1000px) {
    display: grid;
    background-size: 100% 100%;
  }

  @media screen and (max-width: 500px) {
    display: grid;
    background-image: #390044 !important;
    background-size: 100% 100%;;
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
    padding-top: 10px;
    position: absolute;
    background-color: #390044 !important;
    padding: 10px !important;
    background-size: 100% 100%;
  }

  @media screen and (max-width: 520px) {
    padding-top: 150px !important;
    background-size: 100% 100%;
  }

  @media screen and (max-width: 1040px) {
    justify-content: flex-end;
    background-size: 100% 100%;
    padding-top: 150px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 1024px) {
    left: 60px;
    width: 50%;
    height: 100%;
    gap: 10%;
  }
  @media screen and (max-width: 500px) {
    left: 0px;
    width: 100%;
    background-image: #390044 !important;
    background-size: 100% 100%;
  }
`;

const BaseHase = styled.span `
  width: 80%;
  padding: 20px 20px 0 0;
  gap: 30px;
  display: flex;
  text-align: left;
  z-index: 1  ;

  @media screen and (max-width: 1450px) {
    display: flex;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    margin-top: 5%;
    background-size: 100% 100%;
  }

  @media screen and (max-width: 500px) {
    display: grid;
    background-size: 100% 100%;
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
    padding: 0 0 0 0;
  }
  @media screen and (max-width: 1024px) {
    font-size: 45px;
    margin-bottom: 20px;
  }
`;

const HeroParagraph = styled.p`
  margin: 20px 120px 0 0 ;
  font-size: 18px;
  line-height: 25pt; 


  @media screen and (max-width: 1300px) {
    font-size: 14px;
    margin: 0 0 0 0;
  }
  @media screen and (max-width: 1024px) {
    margin-top: -35px;
    font-size: 14px;
    margin-bottom: 15%;
  }
`;

const Hero = () => {
  const matches = useMediaQuery("(max-width: 900px)");
  return (
    <HeroBase>
      <HeroBackground src={matches ? HeroResp : HeroImg} />
      <HeroContent>
        <HeroTitle>
          <strong>Lorem Ipsum is, <br />
          simply dummy text.</strong>
        </HeroTitle>
        <HeroParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it 
          to make a type specimen book.
          <BaseHase>
            <Link to="/SociosPage">
                <OrangeButton text="Hazte Socio"/>
            </Link>
            <Link to="/CatalogoPage">
              <OrangeButton text="Contrata"/>
          </Link>
        </BaseHase>
        </HeroParagraph>        
      </HeroContent>
    </HeroBase>
  );
};

export default Hero;
