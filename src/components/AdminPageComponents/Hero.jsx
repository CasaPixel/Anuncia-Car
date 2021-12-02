import styled from "styled-components";

const HeroBase = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 500px) {
    background-image: #6c1e61 !important;
  }
`;
const HeroContent = styled.div`
  position: absolute;
  margin-top: 5%;
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
  font-size: 35px;
  color: purple;
`;


const Hero = () => {
  return (
    <HeroBase>
      <HeroContent>
        <center>  <TitleSection>Home de Admin</TitleSection> </center>
      </HeroContent>
    </HeroBase>
  );
};

export default Hero;
