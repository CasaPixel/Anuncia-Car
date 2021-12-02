import { Link } from "react-router-dom";
import styled from "styled-components";
import headerLogo from "../../Assets/Home/Logo head.png";
import OrangeButton from "../GeneralResources/Button";
import { useMediaQuery } from "../../hooks/UseMedeQuery";
import Menu from "./MenuHeader";



const NavbarBase = styled.div`
  width: 85%;
  margin:20px 10% 10%  10%;
  gap: 15%;
  display: flex;
  position: ${({ absolute }) => absolute && "absolute"};
  z-index: 3;

  @media screen and (max-width: 1250px) {
    width: 90%;
    gap: 23%;
    margin:20px 5% 0  60px;
  }

  @media screen and (max-width: 500px) {
    width: 60%;
    display: grid;
    margin:20px 5% 0  20px;
  }


`;

const NavbarIcon = styled.div`
  flex: 1;
`;
const NavbarMenu =styled.div `
  display: flex;
  align-items: left;
  color: white;
  gap: 300px;

  @media screen and (max-width: 1024px) {
    width: 60%;
    gap: 80px;
    display: flex;
  }

  @media screen and (max-width: 500px) {
    width: 60%;
    gap: 130px;
    display: flex;
  }
  `;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


const Navbar = ({ absolute }) => {
  const matches = useMediaQuery("(max-width: 700px)");
  return (
    <NavbarBase absolute={absolute}>
      <NavbarMenu >
      <NavbarIcon>
        <Link to="/">
          <img src={headerLogo} alt="logo" />
        </Link>
      </NavbarIcon>
        <Menu/>        
      </NavbarMenu>
      {matches ? ( 
         <NavbarLinks>
          <Link to="LoginPage">
            <OrangeButton text="MI CUENTA"/>
          </Link>
        </NavbarLinks> ) : (
        <NavbarLinks>
          <Link to="LoginPage">
            <OrangeButton text="MI CUENTA"/>
          </Link>
        </NavbarLinks>
      )}         
    </NavbarBase>
  );
};

export default Navbar;


