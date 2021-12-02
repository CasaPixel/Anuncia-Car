import React from "react";
import Hero from "../components/HomePageComponents/Hero";
import Navbar from "../components/GeneralResources/NaVar";
import Footer from "../components/GeneralResources/Footer";
import Jumbotron from "../components/HomePageComponents/Jumbotron";
import Cards from "../components/HomePageComponents/CardsCar";


const Home = () => {
  
  return (
    <>
        <Navbar absolute/>
        <Hero/>
        <Jumbotron/>
        <Cards/>
        <Footer/>
    </>
  );    
};

export default Home;
