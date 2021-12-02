import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form} from 'react-bootstrap';
import "./DivsFormat.css";

const SociosCount= () => {
  return (
    <div className="cardSocios text-center">
      <div className="card-bodySocios ">
        <h4 className="card-title-Socios"><strong>PAGOS</strong></h4>
        <Form>
          <Form.Group className="mb-3" controlId="formGridCountName">
            <Form.Control className="NameCountData" placeholder="Titular de la cuenta" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridCountBank">
            <Form.Control className="BankCountData" placeholder="Nombre del banco" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridCountNumber">
            <Form.Control className="NumberCountData" placeholder="Clave interbacaria" />
          </Form.Group>                 
        </Form>
      </div>
    </div>
  );
}



export default SociosCount;