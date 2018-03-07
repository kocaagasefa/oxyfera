import React from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Logo from './Logo/Logo';
import './NavBar.css';
const navBar = (props) => (
<Navbar fluid collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <Logo />
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
    <LinkContainer exact to="/" >
      <NavItem>
          Ana Sayfa
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/about" >
      <NavItem>
        Hakkımızda
      </NavItem>
    </LinkContainer>
    <NavDropdown title="Ürünlerimiz" id="basic-nav-dropdown">
              
                <LinkContainer exact to="/products/single" >
                  <MenuItem>
                    Tekli Oksijen Bar
                    </MenuItem> 
                </LinkContainer>  
                <LinkContainer exact to="/products/double">
                    <MenuItem>
                        İkili Oksijen Bar
                    </MenuItem> 
                </LinkContainer>
                <LinkContainer exact to="/products/four">
                    <MenuItem>
                        Dörtlü Oksijen Bar
                    </MenuItem> 
                </LinkContainer>
                
 
      </NavDropdown >
    <LinkContainer exact to="/contact">
      <NavItem>
          İletişim
      </NavItem>
    </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
export default navBar;