import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { getAllCategories } from '../../services/products';

import "./NavBarComponent.css";

const NavBarComponent = () => {
    const [categories, setCategories] = React.useState([]);
    React.useEffect(() => {
        getAllCategories()
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    });

    return (
        <Navbar expand="lg" className="bg-body-tertiary, navBarComponent">
            <Container>
                <Navbar.Brand><Link to="/" className='linkMenu'>
                    <img
                        alt="Logo"
                        src="./src/img/0.logoBuffetSemanalBalanceado.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Cachivaches y más
                </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            {categories.map((category) => {
                                return (
                                    <NavDropdown.Item key={category.slug}>
                                        <Link to={`/category/${category.slug}`} className='linkButton'>{category.name}</Link>
                                    </NavDropdown.Item>
                                );
                            })};
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                < CartWidgetComponent />
            </Container>
        </Navbar>
    );
};

export default NavBarComponent;