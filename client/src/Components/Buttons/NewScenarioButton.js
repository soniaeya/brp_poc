import "./NewScenarioButton.css"
import addButton from "../../Img/+ button.png";
import React, {useState} from 'react';
import {nanoid} from "nanoid";
import NewScenarioForm from "../Forms/NewScenarioForm"
import {
    BrowserRouter as Router, Switch,
    Route, Redirect, Link,
} from "react-router-dom";
import {} from "../Table/Table"
import data from "../../tableData.json";

function NewScenarioButton() {       //This function displays the yellow NewScenario button and includes functionality
    const ScenarioNameList = [];      //Array of scenario names

    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        scenarioName: '',
        createdYear: '',
        createdBy:'',
        user: ''
    });
    function createScenario() {      //Function called when button is pushed
        const newScenarioName = prompt('Please enter your name') //Prompts user for a new scenario name
        ScenarioNameList.push(newScenarioName);     //Adds user input (new scenario name) to the array of scenario names


        return (
            <div>
                {alert(ScenarioNameList)}
            </div>
        )
    }

    //function called when form is submit
    //TODO: When form is submit -> add row to table





    //TODO: Connect user name, createdYear, and user type to table info and JSON file

    return (
        <div>
            <img src={addButton} alt="addButton" onClick={createScenario}></img>
        </div>
    );
}

export default NewScenarioButton;