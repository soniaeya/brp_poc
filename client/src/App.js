
import './App.css';
import Table from "./Components/Table/Table.js"
import AddScenarioButton from "./Components/Button/AddScenarioButton"
import SearchBar from "./Components/Header/SearchBar"
import brpLogo from "./Img/BRP_logo.png"
import ProLineSSV from "./Img/Pro-Line-SSV.png"

import addButton from "./Img/+ button.png"
import notif from "./Img/Notifications.png"
import userIcon from "./Img/User profile.png"
import MyNavbar from './Components/Navbar/MyNavbar';

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
          <Table></Table>
        </div>
        <div className="addButton">
          <img src={addButton} alt="addButton"></img>
        </div>

        <div className="test">
          <MyNavbar></MyNavbar>

        </div>
      </div>
    </div>
  );
}

export default App;
