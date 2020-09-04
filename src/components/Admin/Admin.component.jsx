import React from 'react'
import "./Admin.styles.scss"
import { useState } from 'react';

function Admin() {
     const[itemValue,setItemValue] = useState("");
     const[imgValue,setImgValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setItemValue("");
        setImgValue("");
    }

    const handleChange =(e) => {
        setItemValue(e.target.itemValue);
        setImgValue(e.target.imgValue);
    }

   
    return (
        <div className="admin_Pannel">
        <div className="admin">
            <h1>Add Items</h1>
            <form onSubmit={handleSubmit} className="admin">
            <input onChange={handleChange} value={itemValue} placeholder="Enter Item Name" />
            <input onChange={handleChange} value={imgValue} placeholder="Upload Image" />
            <button type="submit">Upload</button>
            </form>
        </div>
        <div className="preview">
            <h1 className="h1">Preview</h1>
            
        </div>
        </div>
    )
}

export default Admin
