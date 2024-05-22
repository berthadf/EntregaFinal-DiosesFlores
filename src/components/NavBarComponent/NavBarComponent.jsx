import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

import "./NavBarComponent.css";

const NavBarComponent = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary, navBarComponent">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="Logo"
                        src="./src/img/0.logoBuffetSemanalBalanceado.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Buffet semanal saludable</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Entradas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1.1">Frías</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2">Calientes</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Platos de fondo" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">Pescado o marisco 🐟</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">Carne de res o cerdo 🥩</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3">Aves 🍗</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.4">Pasta 🍝</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.5">Menestras o cereales 🫘</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.6">Platos especiales 🍲</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Postres" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Semifríos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fríos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Calientes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Fritos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                < CartWidgetComponent />
            </Container>
        </Navbar>
    );
};

export default NavBarComponent;