import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'

import "./header.css" //eslint-disable-next-line

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar light expand="md" className = "navbar">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Home/" className= "link"><FontAwesomeIcon icon = {faHome} size="1x" className = "projectButtonIcon"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects/" className= "link">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Experiences/" className= "link">Experiences</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;
