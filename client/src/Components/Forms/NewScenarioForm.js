
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
function NewScenarioForm(){
    let path = `newPath`;
    let history = useHistory();
    history.push(path);
    return(
        <div>
            <h1>WHAT</h1>
        </div>

    );
}

export default NewScenarioForm;