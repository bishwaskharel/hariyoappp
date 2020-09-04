import React, { useState } from 'react';
import "./SignInForm.styles.scss"
import {Link } from "react-router-dom"

const SignInForm = () => {
    const [value1,setValue1] = useState('');
    const [value2,setValue2] = useState('');


    const handleChange =(e) => {
        setValue1(e.target.value1);
       // console.log(value1);
        setValue2(e.target.value2);
    }

    const [uploadInfo, setUploadInfo] = useState('Forget Password?')

    const handleSubmit = (e) => {
        e.preventDefault();

       // console.log(value1);
       // console.log(value2);
       // setUploadInfo("You Logged In successfully")
       /* if (value1 === "admin" && value2 === "hariyo"){
            const authLink = "/Admin";
            return 
        } 
            console.log("password Incorrenct");
            const authLink = "/SignInForm";
            return */

           // setValue1("");
           // setValue2("");
            
        

    }

    const buttonClicked =(e) => {
       /// console.log(e.target.value1);
        //console.log(e.target.value2);
        setUploadInfo("You Logged In successfully")
        setValue1("");
        setValue2("");
       
    }

return (
        <div className="formBox">
            <h1>Admin Pannel</h1>
            <form onSubmit={handleSubmit} >
                <input  value={value1} onChange={handleChange} placeholder="User Name" type="text"/>
                <input  value={value2} onChange={handleChange} placeholder="Password" type="password" />
               <Link to={handleSubmit.authLink}><button onClick={buttonClicked} type="submit">Submit</button></Link>
<p>{uploadInfo}</p>
                
            </form>
        </div>
    )
}

export default SignInForm;
