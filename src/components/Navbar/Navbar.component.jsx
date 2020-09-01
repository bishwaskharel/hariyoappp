import React from 'react';
import "./Navbar.styles.scss";
import logo from "./logo.png";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="header">
           <Link to="/"><img src={logo} alt="" /></Link>
            <div className="menuBars">
                <ul>
                <Link to="/"><li><button>User</button></li></Link>
                <Link to="/SignInForm"><li><button>Admin</button></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
