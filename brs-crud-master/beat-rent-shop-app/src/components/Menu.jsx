import React from "react";
import { Link } from "react-router-dom";
import './estilo.css'

function Menu(){

    return(
       
       <div>
        
        <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
            
            <a className="Header" href="/">BEAT RENT SHOP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="edit-form input">
                <Link to={'/celulares'} className="nav-link active">CELULARES</Link>
                </li>
                <li className="edit-form input">
                <Link to={'/juegos'} className="nav-link active">JUEGOS</Link>
                </li>                
            </ul>           
            </div>           
        </div>
        </nav>
       </div>
       
    );
};

export default Menu