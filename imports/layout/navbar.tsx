import React from 'react';
import Link from "next/link";

import { handleLogout } from '@auth_tools';

import { UserResJSON } from '@api_types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

interface NavBarType {
  logged_in_status: string,
  setLoggedInStatus: (logged_in_status: string) => void,
  setUser: (user: UserResJSON | {}) => void
}

const NavBar: React.FC<NavBarType> = ({ logged_in_status, setLoggedInStatus, setUser }) => (
  <Navbar bg="light" variant="light" expand="lg">
    <Navbar.Brand as={Link} href="/"> Home </Navbar.Brand>

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="d-flex align-items-center mr-auto">

        { (logged_in_status === 'NOT_LOGGED_IN') && (
          <NavDropdown title="Rejoignez nous" id='basic-nav-dropdown'>
            <NavDropdown.Item as={Link} href='/registration' passHref> Inscription </NavDropdown.Item>
            <NavDropdown.Item as={Link} href='/login' passHref> Connexion </NavDropdown.Item>
          </NavDropdown>
        )}

        { (logged_in_status === 'LOGGED_IN') && (
          <NavDropdown title="Mon Compte" id='basic-nav-dropdown'>
            <NavDropdown.Item as={Link} href='/profile' passHref> Mon Profil </NavDropdown.Item>
            <NavDropdown.Item
              onClick = { () => handleLogout(logged_in_status, setLoggedInStatus, setUser) }
            >
              Déconnexion
            </NavDropdown.Item>
          </NavDropdown>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar;