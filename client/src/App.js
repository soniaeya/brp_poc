
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ResponsiveBreakpointsExample from "./Components/Table/Table.js"
import NewScenarioButton from "./Components/Buttons/NewScenarioButton"
import SearchBar from "./Components/Header/SearchBar"
import brpLogo from "./Img/BRP_logo.png"
import ProLineSSV from "./Img/Pro-Line-SSV.png"

import addButton from "./Img/+ button.png"
import notif from "./Img/Notifications.png"
import userIcon from "./Img/User profile.png"
import MyNavbar from './Components/Navbar/MyNavbar';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewScenarioForm from "./Components/Forms/NewScenarioForm";
import React from "react";

function App() {
  let scenarios = [];
  return (
    <div className="App">
      <div className="leftDiv">
        <div className="title">
          <div>
            <img src={brpLogo} alt="brp_logo"></img>
          </div>
        </div>
        <p className="titleText">PnP Digitalization</p>
        <div>
          <MyNavbar></MyNavbar>

        </div>



      </div>
      <div className="mainDiv">
        <div className="headerObjects">
          <img src={ProLineSSV} alt="ProLineSSV"></img>
          <div className="notifIcon">
            <img src={notif} alt="ProLineSSV"></img>
          </div>
          <div className="userIcon">
            <img src={userIcon} alt="user icon"></img>
          </div>
          <SearchBar></SearchBar>
        </div>
        <div className="mainTable">
          <ResponsiveBreakpointsExample></ResponsiveBreakpointsExample>
        </div>


      </div>
      <div className="addButton">
        <Route path="/form" element={<NewScenarioForm/>}>
        </Route>
        <NewScenarioButton></NewScenarioButton>
      </div>

    </div>
  );
}

export default App;
