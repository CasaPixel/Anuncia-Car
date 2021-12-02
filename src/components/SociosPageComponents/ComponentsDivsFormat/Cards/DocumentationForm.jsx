import React from "react";
import styled from "styled-components";
import OrangeButton from "../../../GeneralResources/Button"
import "bootstrap/dist/css/bootstrap.min.css";
import {Form} from 'react-bootstrap';
import "./DivsFormat.css";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";


const PersonalDocuments = styled.p `
  margin-top: 7px;
  margin-bottom: 7px;
  color: #e96a04;
  text-align: left;
  font-size: 18px;
`;

const Paragraph1 =styled.p `
  margin-top: -80px;
  margin-bottom: -10px;
  font-size: 13pt;
`;

const Check1 =styled.p `
  margin-bottom: 10px;
  font-size: 12pt;
`;

const FormatFiles =styled.div`
  margin-top: -40px;
  display: flex;
`;
const InputFilesDoc= styled.div `
  margin-left: 0px;
`;


const Card= () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (  
    <div className="cardSocios text-center">
      <div className="card-bodySocios ">
        <h4 className="card-title-Socios"><strong>DOCUMENTACIÓN</strong></h4>
        <Form.Group className="position-relative mb-3">          
            <Form.Label>
              <Paragraph1>
                Para poder colaborar deberás adjuntar tu siguiente documentación 
              </Paragraph1>
            </Form.Label>
                <FormatFiles>
                    <InputFilesDoc>
                      <PersonalDocuments>Agregar INE</PersonalDocuments> 
                      <Form.Control type="file" required name="file" controlId="formGridInput"/>
                      <PersonalDocuments>Agregar Comrobante de Domicilio</PersonalDocuments> 
                      <Form.Control type="file" required name="file"  />
                      <PersonalDocuments>Agregar 4 fotos, nombre y modelo del vehículo</PersonalDocuments> 
                      <Form.Control className="CarModel" placeholder="Nombre y modelo del auto" />
                      <Form.Control type="file" required name="file"/>
                      <Form.Control type="file" required name="file"/>
                      <Form.Control type="file" required name="file"/>
                      <Form.Control type="file" required name="file"/>
                    </InputFilesDoc>                    
                </FormatFiles>
                <InputFilesDoc>
                      <PersonalDocuments>Por favor selecciona las partes del vehículo para publicitar</PersonalDocuments> 
                      <Check1><input type="checkbox" /> Medallón </Check1>
                      <Check1>  <input type="checkbox" /> Puertas</Check1> 
                      <Check1>  <input type="checkbox" /> Cofre </Check1>

                    </InputFilesDoc> 
          </Form.Group>         
          <Link to="/ThanksPage">
              <center><OrangeButton text="Finalizar registro"/></center>
          </Link>
        

      <Link variant="primary" onClick={handleShow}>
       <center> Más información</center>
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Más Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>Aquí van las instrucciones</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>    </div>
  );
}
export default Card;