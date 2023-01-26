import "./NewScenarioButton.css"
import addButton from "../../Img/+ button.png";
import React, { useState } from 'react';
import NewScenarioForm from "../Forms/NewScenarioForm"
import { BrowserRouter as Router, Switch,
    Route, Redirect,} from "react-router-dom";


function NewScenarioButton(){
    const [visibility, setVisibility] = useState(false);
    const popupCloseHandler = () => {
        setVisibility(false);
    };

    function createScenario(){



    }

    return (
        <div>

            <img src={addButton} alt="addButton" onClick={<Link to="/NewScenarioForm">About</Link>}></img>

        </div>
    );

}

export default NewScenarioButton;