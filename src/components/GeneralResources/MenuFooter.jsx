import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul className="nav-menu">
                       
                            <Link to="/" className="nav-links">
                                <p>Inicio</p>
                            </Link>                        
                            <Link to="/NosotrosPage" className="nav-links">
                                <p>Nosotros</p>
                            </Link>
                            
                            <Link to="/CatalogoPage" className="nav-links">
                                <p>Catálogo</p>
                            </Link>
                            
                            <Link to="/FAQPage" className="nav-links">
                                <p>Faq´s</p>
                            </Link>
                            
                            <Link to="/SoporteTec" className="nav-links">
                                <p>Soporte Técnico</p>
                            </Link>
                    </ul>
                </div>
            </nav>
        </>
    )}

    export default Navbar;