import React from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Logo from './Logo/Logo';
import './NavBar.css';
const navBar = (props) => (
<Navbar onToggle={console.log} fluid inverse collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <Logo />
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
    <LinkContainer exact to={props.home} >
      <NavItem>
          Ana Sayfa
      </NavItem>
    </LinkContainer>
    <LinkContainer to={props.home+"/about"} >
      <NavItem>
        Hakkımızda
      </NavItem>
    </LinkContainer>
    <LinkContainer exact to={props.home+"/products"} >
      <NavItem>
      Ürünler
      </NavItem>
    </LinkContainer>
    <LinkContainer exact to={props.home+"/contact"} >
      <NavItem>
          İletişim
      </NavItem>
    </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
export default navBar;