import React from 'react'
import "./ListItem.styles.scss"
import SearchItemBox from "../SearchItemBox/SearchItemBox.component"

function ListItem() {
    return (
        <div className="listItem">
            <SearchItemBox />
        </div>
    )
}

export default ListItem
