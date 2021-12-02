import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../Pages/Homepage";
import NosotrosPage from "../Pages/NosotrosPage";
import CatalogoPage from "../Pages/CatalogoPage";
import FAQPage from "../Pages/FAQPage";
import SoporteTec from "../Pages/SoportePage";
import RentarPage from "../Pages/RentarPage";
import SociosPage from "../Pages/SociosPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegistroPage";
import ThanksSociosPage from "../Pages/ThanksSocioPage";
import ThanksRentaPage from "../Pages/ThanksRenta";
import UserSociosHomePage from "../Pages/UserSociosHomePage"
import UserSocioInfoPage from "../Pages/SociosPages/InformacionPersonal";
import UserSocioCarteraPage from "../Pages/SociosPages/MiCartera";
import UserSocioRentaPage from "../Pages/SociosPages/MisRentas";
import UserRentaHomePage from "../Pages/UserRentaHomePage";
import MapCalor from "../Pages/CalorPage"
import UserRentaInfoPage from "../Pages/RentaPages/InformacionPersonal";
import UserRentaCarteraPage from "../Pages/RentaPages/MiCartera";
import UserRentaRentaPage from "../Pages/RentaPages/MisRentas";
import AdminPage from "../Pages/AdminPage"
import ScrollTop from "../components/Helpers/ScrollTop";


const Routes =() =>{

    return(
        <BrowserRouter>
            <ScrollTop/>
            <Switch>
                <Route exact path="/" component ={Home}/>
                <Route exact path="/NosotrosPage" component ={NosotrosPage}/>
                <Route exact path="/CatalogoPage" component ={CatalogoPage}/>
                <Route exact path="/FAQPage" component ={FAQPage}/>
                <Route exact path="/SoporteTec" component ={SoporteTec}/>
                <Route exact path="/RentarPage" component ={RentarPage}/>
                <Route exact path="/SociosPage" component ={SociosPage}/>
                <Route exact path="/LoginPage" component ={LoginPage}/>
                <Route exact path="/RegisterPage" component ={RegisterPage}/>
                <Route exact path="/ThanksPage" component ={ThanksSociosPage}/>
                <Route exact path="/ThanksRenta" component ={ThanksRentaPage}/>
                <Route exact path="/SociosHome" component ={UserSociosHomePage}/>
                <Route exact path="/SociosInfo" component ={UserSocioInfoPage}/>
                <Route exact path="/SociosCartera" component ={UserSocioCarteraPage}/>
                <Route exact path="/SociosRenta" component ={UserSocioRentaPage}/>
                <Route exact path="/RentaHome" component ={UserRentaHomePage}/>
                <Route exact path="/CalorMap" component ={MapCalor}/>                
                <Route exact path="/RentaInfo" component ={UserRentaInfoPage}/>
                <Route exact path="/RentaCartera" component ={UserRentaCarteraPage}/>
                <Route exact path="/RentaRenta" component ={UserRentaRentaPage}/>
                <Route exact path="/AdminHome" component ={AdminPage}/>

                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;