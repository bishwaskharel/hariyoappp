import React from 'react'
import "./SearchItemBox.styles.scss";
import search from "./Image/search.png"

function SearchItemBox() {
    return (
        <div className="bothItems"> 
        <div className="Box">
            <input placeholder="Search Item"/>
            <img src={search} alt="" />
        </div>
        <div className="priceBox">
            <input placeholder="Rs." />
        </div>
        </div>
    )
}

export default SearchItemBox;
