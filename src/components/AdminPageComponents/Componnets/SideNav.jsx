import React from 'react';
import ImageLogo from "../../../Assets/Home/Logo head.png"
import {CDBSidebar, CDBSidebarContent,CDBSidebarHeader,CDBSidebarMenu,CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "./SideNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SideNav = () => {
return (
<div className="sidenav">
  <CDBSidebar textColor="#fff" backgroundColor="#390044">
  <div className="Logobg">
      <img src={ImageLogo} alt="" />
   </div> 
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Información Principal</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Mis rentas</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Mi cartera </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hero404" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">
                Salir
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      </div>
  );
};
export default SideNav;