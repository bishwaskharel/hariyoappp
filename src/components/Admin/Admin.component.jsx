import React from 'react'
import "./Admin.styles.scss"

function Admin() {
    return (

        <div className="admin_Pannel">
        <div className="admin">
            <h1>Add Items</h1>
            <form type="summit" className="admin">
            <input placeholder="Enter Item Name" />
            <input placeholder="Upload Image" />
            <button>Upload</button>
            </form>
        </div>
        <div className="preview">
            <h1 className="h1">Preview</h1>
            
        </div>
        </div>
    )
}

export default Admin
