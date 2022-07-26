import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

function Footer (props) {
    return (
        <div className="Footer">
        <h1>{props.heading}</h1>
        </div>
    );
}

export default Footer;