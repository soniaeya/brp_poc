import React, {useState} from "react";
import "./SearchBar.css"
import loupe from "../../Img/loupe.png"


function SearchBar() {
    /*
    TODO: Add search image to search bar
     */

    return (
        <div>

            <input
                className="SearchBar"
                placeholder="Search..."
                type="text"
            />

        </div>
    )
}

export default SearchBar;