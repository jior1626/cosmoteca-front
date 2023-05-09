
import React, {useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// Assets and styles
import "./Navbar.css";
import logoImg from "../../../assets/images/logo.png";

// Libraries components
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarMenu = () => {
    return (
        <>
            <Navbar  bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="brand-and-toggler" href="#home">
                        <img src={logoImg} alt="site logo" width={20} height={40}/>
                        <h1 className="title-page">Cosmoteca</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/favorities">Favorities</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMenu;