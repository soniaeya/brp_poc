import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyTable from "./Components/Table/Table.js"
import NewScenarioButton from "./Components/Buttons/NewScenarioButton"
import SearchBar from "./Components/Header/SearchBar"
import brpLogo from "./Img/BRP_logo.png"
import ProLineSSV from "./Img/Pro-Line-SSV.png"

import addButton from "./Img/+ button.png"
import notif from "./Img/Notifications.png"
import userIcon from "./Img/User profile.png"
import MyNavbar from './Components/Navbar/MyNavbar';

import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewScenarioForm from "./Components/Forms/NewScenarioForm";
import "./Components/dropdownMenu/dropdownMenu"
import React from "react";
import DropdownMenu from "./Components/dropdownMenu/dropdownMenu";

function App() {
    let scenarios = [];
    return (
        <div className="App">
            <div className="leftDiv">
                <div>
                    <MyNavbar></MyNavbar>
                </div>

            </div>
            <div className="mainDiv">
                <div className="headerObjects">
                    <img className="ProLineSSV" src={ProLineSSV} alt="ProLineSSV"></img>
                    <img className="notifIcon" src={notif} alt="notif icon"></img>
                    <img className="userIcon" src={userIcon} alt="user icon"></img>

                    <SearchBar></SearchBar>
                </div>
                <div className="mainTable">
                    <MyTable></MyTable>
                </div>
            </div>


            <Router>
                <MyNavbar></MyNavbar>
            </Router>


        </div>
    );
}

export default App;
