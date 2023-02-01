
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from "./Components/Table/Table.js"
import NewScenarioButton from "./Components/Buttons/NewScenarioButton"
// import SearchBar from "./Components/Header/SearchBar"
import brpLogo from "./Img/BRP_logo.png"
import ProLineSSV from "./Img/Pro-Line-SSV.png"

import addButton from "./Img/+ button.png"
import notif from "./Img/Notifications.png"
import userIcon from "./Img/User profile.png"
import MyNavbar from './Components/Navbar/MyNavbar';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import NewScenarioForm from "./Components/Forms/NewScenarioForm";
import "./Components/dropdownMenu/dropdownMenu"
import React, { Component } from "react";
import DropdownMenu from "./Components/dropdownMenu/dropdownMenu";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Header from './Components/Header';
import PrivateRoute from './utils/PrivateRoute';

class App extends Component {
  render() {
    return (
    <div className="App">
      {/* <div className="leftDiv">

        <div className="title">
          <img className="brpLogo" src={brpLogo} alt="brp_logo"></img>
          <p className="titleText">PnP Digitalization</p>

        </div>




        <div>
          <MyNavbar></MyNavbar>

        </div>



      </div>
      <div className="mainDiv">
        <div className="headerObjects">
          <img src={ProLineSSV} alt="ProLineSSV"></img>
          <div className="notifIcon">
            <img src={notif} alt="notif icon"></img>
          </div>
          <div className="userIcon">

          </div>
          <SearchBar></SearchBar>
        </div>
        <div className="mainTable">
          <Table></Table>
        </div>


      </div>
      <div className="addButton">
        <Route path="/form" element={<NewScenarioForm/>}>
        </Route>
      </div>
      <DropdownMenu className="dropdownMenu"></DropdownMenu> */}

          <Header/>
      <Routes>
        {/* <AuthProvider> */}
          {/* <Route component={HomePage} path="/" exact/> */}
          <Route element={<HomePage/>} path='/' exact/>
          <Route element={<LoginPage />} path='/login'/>
        {/* </AuthProvider> */}
      </Routes>
      {/* <Routes>
    <Route path='/' element={<HelloWorld />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/vehicules' element={<Vehicules />} />
  </Routes> */}
    </div>
    )
  };
}

export default App;
