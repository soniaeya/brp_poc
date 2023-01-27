import "./NewScenarioButton.css"
import addButton from "../../Img/+ button.png";
import React, { useState } from 'react';
import NewScenarioForm from "../Forms/NewScenarioForm"
import {BrowserRouter as Router, Switch,
    Route, Redirect, Link,
} from "react-router-dom";

function NewScenarioButton(){
    const ScenarioList= [];





    function createScenario(){
        const newScenario = prompt('Please enter your name')
        ScenarioList.push(newScenario);

        return(
            alert(ScenarioList)
        )

    }

    return (
        <div>
            <img src={addButton} alt="addButton" onClick={createScenario}></img>


        </div>
    );

}

export default NewScenarioButton;