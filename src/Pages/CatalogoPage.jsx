import React from 'react';
import NaVar from "../components/GeneralResources/NaVar";
import Hero from "../components/CatalogoPageComponents/Hero";
import Footer from "../components/GeneralResources/Footer";
import Cards from '../components/CatalogoPageComponents/Cars/Cards';
const CatalogoPage=()=> {
    return (
        <>
            <NaVar absolute/>
            <Hero/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default CatalogoPage;
