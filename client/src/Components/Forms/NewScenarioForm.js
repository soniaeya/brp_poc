
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import nyan from "../../Img/nyancat.png"
import userIcon from "../../Img/User profile.png";
function NewScenarioForm(){

    return(
        <div>
            <img src={nyan} alt="user icon"></img>
        </div>

    );
}

export default NewScenarioForm;