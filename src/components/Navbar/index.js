import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavMenu>
        <NavLink to='/'>
        <h1 style={{ color: "black", 
                      textAlign: "left",
                      fontSize: 30, 
                      }}>
           Shortly
         </h1>
        </NavLink>
          <NavLink to='/about' activeStyle>
            Features
          </NavLink>
          <NavLink to='/services' activeStyle>
            Pricing
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Resources
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
