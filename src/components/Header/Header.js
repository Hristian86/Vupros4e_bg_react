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

const Header = () => {

    return <Navbar bg="transparent" className="d-flex sticky-top header mb-0" expand="lg">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" />

        <Link
            onClick={upPage}
            to="/">
            <img
                className="header__logo text-left"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
            />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">

            <div className="header2">

                <div></div>

                <div className="header__container">
                    <SearchIcon />
                </div>

                <div className="header__right">
                    <LanguageIcon />
                    <ExpandMoreIcon />
                    <Avatar />
                </div>

            </div>
        </Navbar.Collapse>
    </Navbar>

}

export default Header;