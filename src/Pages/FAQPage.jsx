import React from 'react';
import NavbarAlternative from '../components/GeneralResources/NavBarAlternative';
import Footer from "../components/GeneralResources/Footer";
import Buscador from '../components/FAQPageComponents/Buscador';
import AppFAQ from "../components/FAQPageComponents/FAQ";

const FAQPage=()=> {
    return (
        <>
            <NavbarAlternative/>
            <Buscador/>
            <AppFAQ/>
            <Footer/>
        </>
    )
}

export default FAQPage;
