import React from 'react'
import "./Body.styles.scss"
import ListItem from "../ListItem/ListItem.component";
import ImageBox from "../ImageBox/ImageBox.components"

function Body() {
    return (
        <div className="bodyBox">
          <div className="leftPart"> 
            <ListItem />
            <button>Download Image</button>
            </div>
           
            <ImageBox />
            
        </div>
    )
}

export default Body;
