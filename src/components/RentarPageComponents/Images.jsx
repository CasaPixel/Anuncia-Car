import React from "react";
import styled from "styled-components";
import ImageCar from "../../Assets/Rentar/imagen principal.png";
import ImagenP1 from "../../Assets/Rentar/Imagen secundaria.png";
import OrangeButton from "../GeneralResources/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form} from 'react-bootstrap';
import ContadorNumber from "./ComponentsRenta/Contador";
import emailjs from "emailjs-com";
import ThanksRenta from "../../Pages/ThanksRenta";



//import Cards from "./ComponentsRenta/Cards";
import "./images.css";

const JumbotronContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 52%;
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

const ContentImage = styled.div `
    display: block;
`;

const JumbotronTitlecar2 = styled.h2`
  font-size: 40px;
  color: #e96a04;
  text-align: left;
  margin-top: 0;

  @media screen and (max-width: 1000px) {
    justify-self: center;
    text-align: center;
  }
`;

const JumbotronArchives = styled.h2`
  font-size: 16px;
  color: #e96a04;
  text-align: left;
  padding-top: 10px;

  @media screen and (max-width: 1000px) {
    justify-self: center;
    text-align: center;
  }
`;

const JumbotronText = styled.p`
  padding-top: 10px;
  margin-bottom: 0px;
  font-size: 16px;
  text-align: left;
  color: black;
  line-height: 25pt;      
`;
 
const ImageDriver = styled.img `
    width: 100%;
    height: 100%;
    padding-left: 10%;
`;

const ImageDriver2 = styled.img `
    width: 35%;
    height: 30%;
    padding-top: 5%;
`;


const InputFilesDoc= styled.div `
  margin-left: 0px;
`;
const Jumbotron = () => {

  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('TestDevelop', 'template_dg0ld3i', e.target, 'user_TaEXargovTEjMjggGxQEy')

    .then((result) => {
        alert(<ThanksRenta/>);
       
    }, (error) => {
        alert(error.message)
        
    });
    e.target.reset()


} 

    
  return (
    <JumbotronContainer>
      <JumbotronBase>
          <JumbotronTextWrapper onSubmit={sendEmail}>
            <ContentImage>
                <div>
                    <ImageDriver className= "ImageFormat1" src={ImageCar}/>
                </div>
                <div className= "ImageFormat">
                    <ImageDriver2 src={ImagenP1}/>
                    <ImageDriver2 src={ImagenP1}/>
                    <ImageDriver2 src={ImagenP1}/>
                </div>
            </ContentImage>
            <JumbotronTitlecar2 name="cocheModelo">
              <strong>BEATLE 86</strong> <br />
              <JumbotronText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua.
              </JumbotronText>
              <div className= "ImageFormats">
                  <div class="cardformat" >
                    <div class="card-body-format" name="medallon">
                      <h5 class="card-title-format">Medallón</h5>
                      <p class="card-text-format-orange"><strong>Ancho</strong></p>
                      <p class="card-text-format">23.5 cm</p>
                      <p class="card-text-format-orange-title2"><strong>Alto</strong></p>
                      <p class="card-text-format">50.6 cm</p>
                    </div>
                  </div>
                  <div class="cardformat" >
                    <div class="card-body-format" name="puertas">
                      <h5 class="card-title-format">Pertas</h5>
                      <p class="card-text-format-orange"><strong>Ancho</strong></p>
                      <p class="card-text-format">23.5 cm</p>
                      <p class="card-text-format-orange-title2"><strong>Alto</strong></p>
                      <p class="card-text-format">50.6 cm</p>
                    </div>
                  </div><div class="cardformat" >
                    <div class="card-body-format" name="cofre">
                      <h5 class="card-title-format">Cofre</h5>
                      <p class="card-text-format-orange"><strong>Ancho</strong></p>
                      <p class="card-text-format">23.5 cm</p>
                      <p class="card-text-format-orange-title2"><strong>Alto</strong></p>
                      <p class="card-text-format">50.6 cm</p>
                    </div>
                  </div>
               </div>
               <ContentImage>
                <div className="UploadFiles" name="File">
                  <JumbotronArchives>
                  <strong>Adjuntar Archivos: </strong> 
                  </JumbotronArchives>
                  <InputFilesDoc>
                      <Form.Control type="file" required name="file" className="custom-input-file" id="formGridRenta"/>
                    </InputFilesDoc>
                </div>
                <div>
                  <ContadorNumber/>
                </div>
                <div className= "ImageFormatText">
                    <JumbotronText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod
                  </JumbotronText>                  
                </div>
                
                <div >
                  <OrangeButton className="Rentar" text="Rentar"/>
                </div>
            </ContentImage>
            </JumbotronTitlecar2>
          </JumbotronTextWrapper>          
      </JumbotronBase>
    </JumbotronContainer>
  );
};

export default Jumbotron;
