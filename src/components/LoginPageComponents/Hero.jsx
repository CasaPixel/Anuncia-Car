import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './hero.css';

const COntentHero =styled.div `
    width: 100%;
    height: 100%;
    padding-top: 10%;
    padding-bottom: 15%;
    background-color: #390044;
`;



function LogBot() {
  return (
                <COntentHero> 
                    <div className="COntenedirLogin">
                    <Link to="/">
                        <center><p className="Close">x</p></center> 
                    </Link>
                    <h3 className="title-h3"><strong>BIENVENIDO</strong></h3>
                        <form className="FormLogin">
                        <div className="form-group">
                            <input type="email" className="form-control " placeholder="Usuario" />
                        </div>

                        <div className="form-group">
                            <i class="icon-search"></i>
                            <input type="password" className="form-control" placeholder="Contraseña" />
                        </div>
                        <div>                            
                            <Link to="/SociosHome">
                                <center><button type="submit" className="btn-submit ">Acceder</button></center>
                            </Link>
                            <Link to="/RegisterPage">
                                <center><a className="RegistroCS" href="/RegisterPage">Registrarse</a></center>
                            </Link>
                            <p className="forgot-password text-right">
                               <center> ¿Olvidaste tu contraseña?</center>
                            </p>
                        </div>
                    </form>
                    </div>
                
                </COntentHero>

                
  );
}

export default LogBot;