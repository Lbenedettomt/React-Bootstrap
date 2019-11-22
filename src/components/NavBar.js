import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Router } from 'react-router-dom';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, navbar-nav .nav-Router {
        color: #fff;

        &:hover {
            color: white;
        }
    }
`;

export const NavBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Code Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Router>
                            <Router to="/">Home</Router>
                        </Nav.Router>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Router>
                            <Router to="/about">Sobre</Router>
                        </Nav.Router>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Router>
                            <Router to="/contact">Entre em contato!</Router>
                        </Nav.Router>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)