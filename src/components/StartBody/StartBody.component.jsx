import React from 'react'
import "./StartBody.styles.scss";
import { Link } from "react-router-dom";
import { useState } from 'react';

function StartBody() {
    const [totalItems, setTotalItems] = useState("");

    const handleChange = (e) =>{
        setTotalItems(e.target.totalItems);
    }

    const handleSubmit = (e) =>{
         e.preventDefault();
    }

    return (
        <div className="StartPage"> 
            <form onSubmit={handleSubmit}>
            <div className="SelectBox">
                
                <h1>How many items you want to add?</h1>
               <input value={totalItems}  onChange={handleChange} placeholder="Enter The Items Number"/>
               <Link to="/Body"><button type="submit" className="button">Enter </button></Link> 
               
            </div>
            </form>
            
        </div>
    )
}
 
export default StartBody
