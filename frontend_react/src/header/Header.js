import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

function Header({ name }) {
    return (
        <div className="headerBox">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <img src="/images/chromatic.png" alr="icon"></img>
                <Navbar.Brand href="/todos/allTodos">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/welcome">LOG OUT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;