import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Nav} from 'react-bootstrap';

const TitleCard = styled.h1`
  font-size: 30px;
  justify-content: left;
  text-align:left;
  color: #e96a04;
 `;
const Buscador=()=> {
    return (

        <Navbar bg="white" expand="lg" className="ScrollNAv">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <TitleCard>
          <strong>
            <center>¿CON QUÉ PODEMOS AYUDARTE?</center>
          </strong>
        </TitleCard>
        <Navbar id="navbarScroll">
          <Nav className="mr-auto my-1 my-lg-0"  style={{ maxHeight: '200px' }} navbarScroll >
          </Nav>
          <form>
            <label>
              <input type="text" className="inputText" name="name"  placeholder="Escribe tu pregunta aquí"/>
            </label>
            <input type="submit" value="Buscar" icon={AiOutlineSearch}/>
          </form>
          
        </Navbar>
      </Navbar>
    )
}

export default Buscador;
