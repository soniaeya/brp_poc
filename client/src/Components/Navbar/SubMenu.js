import React, {useState} from 'react';
import "./MyNavbar.css";

import  {Link} from 'react-router-dom';
import styled from 'styled-components';
import brpLogo from "../../Img/BRP_logo.png";

const DropdownLink = styled(Link)`
  background: rgb(77, 77, 77);
  height: 60px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 15px;
  &:hover {
    color: #fbd304;
    cursor: pointer;
    text-decoration: none;
  }
`;

const SidebarLink = styled(Link)`
  
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  text-decoration: none;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background: rgb(77, 77, 77);
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return(
        <>

            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};
export default SubMenu;