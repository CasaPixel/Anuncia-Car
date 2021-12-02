import { Link } from "react-router-dom";
import styled from "styled-components";
import headerLogo from "../../Assets/Home/Logo head.png";
import HeaderImage from "../../Assets/Home/footer.jpg";
//import Menu from "../GeneralResources/MenuHeader";


const NavBase = styled.div`
  position: relative;
  padding: 10px 0 0 0;
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
const Navbar = () => {
  return (
      <NavBase>
                <Link to="/">
                  <center> <img src={headerLogo} alt="logo" /></center>
                </Link>
      </NavBase>
    
  );
};

export default Navbar;
