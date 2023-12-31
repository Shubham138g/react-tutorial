import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
`;

const NavBar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to='/'>MERN-STACK</Tabs>
          <Tabs to='/alluser'>All User</Tabs>
          <Tabs to='/adduser'>Add User</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};

export default NavBar;
