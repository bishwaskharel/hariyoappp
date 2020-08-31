import React from 'react';
import "./Navbar.styles.scss";
import logo from "./logo.png";

function Navbar() {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className="menuBars">
                <ul>
                    <li><button>User</button></li>
                    <li><button>Admin</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
