import React from 'react'
import "./Admin.styles.scss"
import { useState } from 'react';
//import axios from "axios"
//import { types } from 'node-sass';

function Admin() {
     const[itemValue,setItemValue] = useState("");
     const[selectedFiles, setSelectedFiles]= useState(null);
     const[err,setErr]= useState(null);
     const type=['image/png','image/jpg'];

    const handleSubmit = (e) => {
        e.preventDefault();
        setItemValue("");
       
    }

    const handleChange =(e) => {
        setItemValue(e.target.itemValue); 
    }

    const handleChangeFiles = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        if (selected && type.includes(selected.type) ) {
        setSelectedFiles(selected);
        setErr(null);
    }
    
    else{
        setSelectedFiles(null);
        setErr("Please Select Image File (Jpeg or Png)");

    }
    }
   
    return (
        <div className="admin_Pannel">
        <div className="admin">
            <h1>Add Items</h1>
            <form onSubmit={handleSubmit} className="admin">
            <input onChange={handleChange} value={itemValue} type="text" placeholder="Enter Item Name" />
            <div className="inputFile">
            <label for="myFile">Upload Photo</label>
            <input onChange={handleChangeFiles} value={selectedFiles} id="myFile" type="file" />
            </div>
            <button type="submit">Submit</button>
    <div>{err && <h3>{err}</h3>}</div>
            </form>
        </div>
        <div className="preview">
            <h1 className="h1">Preview</h1>
            
        </div>
        </div>
    )
}

export default Admin
