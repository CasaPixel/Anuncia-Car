import { Link } from "react-router-dom";
import styled from "styled-components";
import headerLogo from "../../Assets/Home/Logo head.png";
import HeaderImage from "../../Assets/Home/footer.jpg";
import OrangeButton from "../GeneralResources/Button";
import { useMediaQuery } from "../../hooks/UseMedeQuery";
import Menu from "../GeneralResources/MenuHeader";


const NavBase = styled.div`
  position: relative;
  padding: 0 0 0 0;
  width: 100%;
  background-image: url(${HeaderImage});


  @media screen and (max-width: 345px) {
    padding: 50px 0px !important;
  }

  @media screen and (max-width: 1000px) {
    background-color: #76058f !important;
    background-size: 100% !important;
  }

  @media screen and (max-width: 1450px) {
    background-image: url(${HeaderImage});
    background-size: 100%;
    background-color: #76058f !important;
    background-position: left bottom;
    padding: 50px;
  }
`;
const NavbarContent = styled.div`
  width: 85%;
  padding: 2%;
  margin:0 10% 7%  10%;
  display: flex;
  position: ${({ absolute }) => absolute && "absolute"};
  z-index: 3;

  @media screen and (max-width: 1250px) {
    width: 95%;
  }
`;


const NavbarIcon = styled.div`
  flex: 1;
`;
const NavbarMenu =styled.div `
  flex: 1;
  align-items: center;
  color: white;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


const Navbar = ({ absolute }) => {
  const matches = useMediaQuery("(max-width: 700px)");
  return (
      <NavBase>
        <NavbarContent absolute={absolute}>
            <NavbarIcon>
                <Link to="/">
                <img src={headerLogo} alt="logo" />
                </Link>
            </NavbarIcon>
            <NavbarMenu >
                <Menu/>
            </NavbarMenu>
                {matches ? ( <img src={headerLogo} alt="Bars" /> ) : (
                <NavbarLinks>
                <Link to="/LoginPage">
                    <OrangeButton text="MI CUENTA" />
                </Link>
                </NavbarLinks>
            )}
        </NavbarContent>

      </NavBase>
    
  );
};

export default Navbar;
