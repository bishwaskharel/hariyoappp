import React from 'react';
import "./SignInForm.styles.scss"
import {Link } from "react-router-dom"

function SignInForm() {
    return (
        <div className="formBox">
            <h1>Admin Pannel</h1>
            <form >
                <input placeholder="User" type="text"/>
                <input placeholder="Password" type="password" />
                <Link to="/Admin"><button>Sumbit</button></Link>
            </form>
            
        </div>
    )
}

export default SignInForm;
