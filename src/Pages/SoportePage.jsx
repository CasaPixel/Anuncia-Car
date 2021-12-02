import React from "react";
import styled from "styled-components";
import Navbar from "../components/SoportePageComponents/Navbar";
import Footer from "../components/GeneralResources/Footer";
import Cards from "../components/SoportePageComponents/Cards/Cards";

const TitleCard = styled.h1`
  font-size: 50px;
  color: #e96a04;
  padding-bottom: 80px;
 `;

const SoporteTec = () => {
  return (
    <>
        <Navbar/>
        <TitleCard>
          <strong>
            <center>SOPORTE TÉCNICO</center>
          </strong>
        </TitleCard>
        <Cards/>
        <Footer/>
    </>
  );    
};

export default SoporteTec;
