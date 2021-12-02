import React from 'react';
import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
import ThanksRenta from "../../../Pages/ThanksRenta";
import "bootstrap/dist/css/bootstrap.min.css";
import './registro.css';

const COntentHero =styled.div `
    width: 100%;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 15%;
    background-color: #390044;
`;
export default function LogBot() {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('TestDevelop', 'template_yys919v', e.target, 'user_TaEXargovTEjMjggGxQEy')

    .then((result) => {
        alert(<ThanksRenta/>);
       
    }, (error) => {
        alert(error.message)
        
    });
    e.target.reset()


} 

    
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
                <COntentHero> 
                    <div className="COntenedirRegistro">
                    <Link to="/">
                        <center><p className="CloseX">x</p></center> 
                    </Link> 
                    <h3 className="title-h3"><strong>REGÍSTRATE</strong></h3>
                    <center><p className="RegistroCS" >Este registro es unicamente para poder rentar,  
                     si deseas ser socio <a href="/SociosPage">Haz click aquí</a></p></center>
                        <form className="FormLogin" onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" className="form-control " placeholder="Nombre" name="name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="InputPhone" placeholder="Número de teléfono" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="InputEmail" placeholder="Correo electrónico" name="message"/>
                        </div>
                        <div className="form-group">
                            <i class="icon-search"></i>
                            <input type="password" className="form-control"  placeholder="Contraseña" name="message" />
                        </div>
                        <div>                            
                         
                                <center><button type="submit" className="btn-submit ">Enviar</button></center>
                          
                            <Link variant="primary" onClick={handleShow}>
                              <center> Más información</center>
                              </Link>

                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Más información</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Aquí van las instrucciones</Modal.Body>
                                <Modal.Footer>
                                  <Button variant="secondary" onClick={handleClose}>
                                    Close
                                  </Button>
                                </Modal.Footer>
                              </Modal>                           
                        </div>
                    </form>
                    </div>
                
                </COntentHero>

                
  );
}
