import React from 'react'
import "./StartBody.styles.scss";
import { Link } from "react-router-dom";

function StartBody() {
    return (
        <div className="StartPage"> 
            
            <div className="SelectBox">
                <h1>How many items you want to add?</h1>
               <input placeholder="Enter The Items Number"/>
               <Link to="/Body"><button className="button">Enter </button></Link> 
            </div>
            
        </div>
    )
}
 
export default StartBody
