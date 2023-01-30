import React, {useState} from "react";
import "./MyNavbar.css";
import {Dropdown} from "react-bootstrap";
import {DropdownButton} from "react-bootstrap";
import {SidebarData} from "./SidebarData";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import SubMenu from "./SubMenu"
import brpLogo from "../../Img/BRP_logo.png";


const Nav = styled.div`
  background: rgb(77, 77, 77);
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.div`
  background: rgb(77, 77, 77);
  width: 15%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;
  left:${({sidebar})=>(sidebar ? '0': '-100%')};
  transition: 350ms;
  z-index: 10;

`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;
const SidebarWrap = styled.div`
  width: 100%;

`;
function MyNavbar() {
    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (

        <div className="navbarDiv">
            <div className="title">
                <img className="brpLogo" src={brpLogo} alt="brp_logo"></img>
                <p className="titleText">PnP Digitalization</p>

            </div>

            <Nav>

                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar}></FaIcons.FaBars>
                </NavIcon>
            </Nav>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar}></AiIcons.AiOutlineClose>
                        </NavIcon>
                        {SidebarData.map((item, index)=>{
                            return<SubMenu item={item} key={index}></SubMenu>
                        })}
                    </SidebarWrap>
                </SidebarNav>





        </div>

    );
}

export default MyNavbar;