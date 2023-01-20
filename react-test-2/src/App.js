
import YoutubeEmbed from "./Components/3_Embedded_Youtube_Vid/YoutubeEmbed";
import Navbar from "./Components/2_nav_bar/Navbar";
import user_icon from '../src/img/user_icon.jpg'
import logo from '../src/img/BRP-Logo.png'



import React, {useState} from 'react';

const App = () => {
      const [open, setOpen] = useState(false);

return (
	<div>
      <div style={{
	}}className="left-div">
            <div className="brp_logo"><img src={logo}></img></div>
      </div>

      <div style={{
		marginLeft: "20%",
	}}className="main-div">
    <input className="search_bar" type="text" placeholder="Search.."></input>

      <div className="menu-container">
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
                  <img src={user_icon}></img>
            </div>

            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                  <h3>Dropdown Menu</h3>
                  <ul>
                        <DropdownItem text={"My Profile"}/>
                        <DropdownItem text={"Scenarios"}/>
                        <DropdownItem text={"History"}/>
                        <DropdownItem text={"Logout"}/>
                  </ul>
            </div>
      </div>
     
     
      <h2>3. Embedding a youtube video</h2>
     
      <YoutubeEmbed embedId="rokGy0huYEA" />





      <h2><button_press/></h2>
      <button onClick={clickHandler}>Button</button>
      <p>




      </p>
      <Navbar className="navi"></Navbar>

      </div>
	</div>
);
};


function DropdownItem(props){
      return(
            <li className="dropdownItem">
                  <img></img>
                  <a>{props.text}</a>
            </li>
      );
}

function clickHandler(){
     
}



export default App;



