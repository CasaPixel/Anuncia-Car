import React from 'react'
import NaVar from "../components/GeneralResources/NaVar";
import Hero from '../components/NosotrosPageComponents/Hero';
import Jumbotron from "../components/NosotrosPageComponents/Jumbotron";
import Footer from '../components/GeneralResources/Footer';

const NosotrosPage=()=> {
    return (
        <>
            <NaVar absolute/>
            <Hero/>
            <Jumbotron/>
            <Footer/>
        </>
    );
}

export default NosotrosPage;
