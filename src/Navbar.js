import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import navbarImg from "./img/navbar.jpg";


function Navbar (props) {
    return (
        <div className="Navbar">
        <h1>{props.heading}</h1>
        {/* <img>{navbarImg}</img> */}
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Résumé</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
    );
}

export default Navbar;