
import React, {useState} from "react";
import userIcon from "../../Img/User profile.png";
import "./dropdownMenu.css"
function DropdownMenu(){
    const [open, setOpen] = useState(false);
    return (
        <div className="menu-container">
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
                <img src={userIcon} alt="user icon"></img>
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
    )
}

function DropdownItem(props){
    return(
        <li className="dropdownItem">
            <img></img>
            <a>{props.text}</a>
        </li>
    );
}
export default DropdownMenu;