import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterImg from "../../Assets/Home/footer.jpg";
import logoFooter from "../../Assets/Home/Logo footer.png";
import Facebook from "../../Assets/Home/icono facebook.png";
import Instagram from "../../Assets/Home/icono instagram.png";
import PhoneCall from "../../Assets/Home/phone-call .png";
import Stripe from"../../Assets/Home/stripe.png";
import Visa from "../../Assets/Home/visa.png";
import MasterCard from "../../Assets/Home/1280px-Mastercard-logo.png";
import AmericanExpress from "../../Assets/Home/American_Express.png";
import OrangeButton from "../GeneralResources/Button";
import MenuNav from "./MenuFooter";


const FooterBase = styled.div`
  position: relative;
  width: 100%;

  @media screen and (max-width: 345px) {
    padding: 50px 0px !important;
  }

  @media screen and (max-width: 1000px) {
    background-color: #76058f !important;
    background-size: 100% !important;
  }

  @media screen and (max-width: 1450px) {
    background-image: url(${FooterImg});
    background-size: 100%;
    background-color: #76058f !important;
    background-position: left bottom;
    padding: 50px;
  }
`;

const FooterBackground = styled.img`
  width: 100%;
  vertical-align: bottom;

  @media screen and (max-width: 1450px) {
    display: none;
  }
`;

const FooterContent = styled.div`
  color: #fff;
  width: 100%;
  position: absolute;
  bottom: 20px;
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 1450px) {
    position: static;
    padding-bottom: 0px !important;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 1700px) {
    padding-bottom: 10px;
  }
`;

const FooterImage = styled.img`
  font-weight: bold;
  flex-direction: row;
  padding-left: 0px;

  @media screen and (max-width: 1450px) {
    justify-self: center;
    text-align: center;
  }

  @media screen and (max-width: 1000px) {
    padding-left: 5%;
    padding-bottom: 1%;
  }
`;
const FooterContact = styled.div`
  font-weight: bold;
  flex-direction: row;

  padding-left: 100px;

  @media screen and (max-width: 100px) {
    justify-self: center;
    text-align: center;
  }

  @media screen and (max-width: 1450px) {
    padding-left: 0px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  padding-top: 15px;
  padding-left:   0px;
  text-align: center;
  vertical-align: center;
  flex-direction: row;
  gap: 30px;
  @media screen and (max-width: 1000px) {
    justify-self: center;
    text-align: center;
    padding-left:4%;
  }
`;
const Icons =styled.img `
  width: 10%;
  height: 10%;

  @media screen and (max-width: 1000px) {
    justify-self: center;
    text-align: center;
    width: 5%;
    height: 5%;
  }

  @media screen and (max-width: 1450px) {
    padding-left: 0px;
  }
`;

const Iconphone =styled.img `
  width: 7%;
  height: 7%;
  padding-top:5px;

  @media screen and (max-width: 1450px) {
    padding-left: 0px;
  }
  @media screen and (max-width: 1000px) {
    justify-self: center;
    text-align: center;
    width: 4%;
    height: 4%;
  }
`;

const Phone = styled.p`
  color: #FFF;
  font-weight: bold;
  margin-top: 5px;
`;

const FooterQuestions = styled.div`
  text-align: center;
  margin-top: -25px;
  @media screen and (max-width: 1000px) {
    margin-top: 5%;
    text-align: center;
  } 

  @media screen and (max-width: 1450px) {
    margin-left: 0px;
  }
`;

const PaymentLogos = styled.div`
  display: inline-grid;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  grid-template-columns: repeat(4, auto);

  @media screen and (max-width: 460px) {
    grid-template-columns: repeat(2, auto);
    justify-items: center;
  }
`;

const FooterPersonaje = styled.div`
  justify-self: end;
  padding-right: 100px;

  @media screen and (max-width: 1450px) {
    margin-top: 20%;
    margin-left:0%;
    margin-right: 0%;
    justify-self: center;
  }

  @media screen and (max-width: 1000px) {
    text-align: left;
    margin-left: 0%;
    padding-right: 0px;
  }
`;
const Footercopy = styled.div `
  background-color: #e96a04 ;
  color: #fff;
  width: 100%;
  position: absolute;
  display: grid;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 1000px) {
    width: 80%;
    grid-template-columns: 1fr;
    padding-bottom:  0px;
  }

  @media screen and (max-width: 1450px) {
    width: 100%;
    position: static;
    padding-bottom: 0px !important;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 1700px) {
    width: 100%;
    padding-bottom: 10px;
  }
`;
const ContentPart = styled.div `
  text-align: right;
`;
const TextTitle = styled.p `
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterBase>
      <FooterBackground src={FooterImg} />
        <FooterContent>
          <FooterContact>
          <Link to="/">
            <FooterImage  src={logoFooter} alt="footer_logo" />          
          </Link>
            
            <SocialIcons>
              <Icons src={Facebook} alt="facebook_icon"  target="_blank"/>
              <Icons src={Instagram} alt="instagram_icon" />
              <Iconphone src={PhoneCall} alt="instagram_icon" />  
              <Phone>(222) 563-9648</Phone>
            </SocialIcons>
          </FooterContact>
          <FooterQuestions>
             <MenuNav/> 
          </FooterQuestions>
          <FooterPersonaje>
            <ContentPart>
              <Link to="/CatalogoPage">
                <OrangeButton text="Contrata"/>
               </Link>
            </ContentPart>
            <PaymentLogos>
              <img src={Stripe} alt="paypal_logo" />
              <img src={Visa} alt="visa_logo" />
              <img src={MasterCard} alt="master_card_logo" />
              <img src={AmericanExpress} alt="american_express_logo" />
            </PaymentLogos>
          </FooterPersonaje>
        </FooterContent>
        <Footercopy> 
              <TextTitle>@2021 Anuncia Car | Terminos y Aviso de privacidad | Comentarios</TextTitle>
        </Footercopy>
    </FooterBase>
  );
};

export default Footer;
