import React, {useState} from "react";
import "./SearchBar.css"
import loupe from "../../Img/loupe.png"


function SearchBar() {
    /*
    TODO: Add search image to search bar
     */

    return (
        <div>
            <img id="searchIcon" src={loupe} alt="loupe"/>

            <input

                className="SearchBar"
                placeholder="Search..."
                type="text"
            />

        </div>
    )
}

export default SearchBar;