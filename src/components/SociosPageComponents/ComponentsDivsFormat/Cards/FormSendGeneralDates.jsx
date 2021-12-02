import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form} from 'react-bootstrap';
import "./DivsFormat.css";

const Paragraph1 =styled.p `
  margin-top: 15px;
  margin-bottom: -10px;
  font-size: 13pt;
`;
const GeneralDates= () => {
  return (
    <div className="cardSocios text-center">
      <div className="card-bodySocios ">
        <h4 className="card-title-Socios"><strong>DATOS GENERALES</strong></h4>
        <Paragraph1><center>Introduce tu fecha de nacimiento</center></Paragraph1>
        <Form className="PersonalData">          
          <Form.Group className="mb-3" controlId="formGridDate">
            <Form.Group controlID="Date" align="center">
              <center><Form.Control className="DatePersonalData" type="date"/></center>
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridName">
            <Form.Control className="NamePersonalData" type="text"placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridCity">
            <Form.Control className="CityPersonalData" type="text"placeholder="Ciudad" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Control className="EmailPersonalData" type="email" placeholder="Correo electrónico" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridCountPassword">
            <Form.Control  className="PasswordPersonalData" type="password" placeholder="Password"/>
          </Form.Group>             
          </Form>        
      </div>
    </div>
  );
}



export default GeneralDates;