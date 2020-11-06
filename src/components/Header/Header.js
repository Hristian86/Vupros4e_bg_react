import React from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { upPage } from '../UpPage/Uppage';
import Avatar from './Avatar';
import SearchIcon from './SearchIcon';
import LanguageIcon from './LanguageIcon';
import ExpandMoreIcon from './ExpandMoreIcon';
import HeaderLinks from './HeaderLinks';

const Header = () => {

    return <Navbar bg="transparent" className="d-flex sticky-top header mb-0" expand="lg">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" />


        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">

            <HeaderLinks />

        </Navbar.Collapse>
    </Navbar>

}

export default Header;