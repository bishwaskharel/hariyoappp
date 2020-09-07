import React, { useState } from 'react'
import "./SearchItemBox.styles.scss";
//import search from "./Image/search.png"

function SearchItemBox() {

    const[value, setValue] = useState("")

    const handleChange=(e)=>{
       const finalValue= e.target.value;
        setValue(finalValue)
        alert("You Selected: " + finalValue)
    }
    
    return (
        <div className="bothItems"> 
        <div className="Box">
            <select  onChange={handleChange} placeholder="Search Item" >
                <option value="Apple">Apple</option>
                <option value="Grapes">Grapes</option>
                <option value="Orange">Orange</option>
                <option value="Mango">Mango</option>
                <option selected value="Select Any Item    ">Select Any Item</option>
            </select>
           
        </div>
        <div className="priceBox">
            <input placeholder="Rs." />
        </div>
        </div>
    )
}

export default SearchItemBox;
