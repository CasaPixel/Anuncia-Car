import React from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Nav} from 'react-bootstrap';

const NavBase = styled.div `
    padding-left: -100px;
`;
const LinkTitle = styled.p `
    color: white;
    font-size: 16px;
`;
const NavContent = styled.div `
    display: flex;
    gap: 50px;

    @media screen and (max-width: 1024px) {
    width: 60%;
    gap: 40px;
    display: flex;
  }

  @media screen and (max-width: 500px) {
    width: 60%;
    gap: 30px;
    display: flex;
  }
`;

const BootstrapNavbar=()=>{

    
        return(
               <NavBase>
                    <Navbar bg="transparent" >
                    <Navbar.Collapse id="basic-navbar-nav" align="left">
                    <Nav className="mr-auto">
                        <NavContent>
                            <Nav.Link href="./" ><LinkTitle>Inicio</LinkTitle></Nav.Link>
                            <Nav.Link href="./NosotrosPage"><LinkTitle>Nosotros</LinkTitle></Nav.Link>
                            <Nav.Link href="./CatalogoPage"><LinkTitle>Catálogo</LinkTitle></Nav.Link>
                        </NavContent>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
               </NavBase>
        );  
    
}

export default BootstrapNavbar;