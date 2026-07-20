import React, { useState, useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";


function EnvoLayout(props) {

    return (
        <div>
            <Navbar variant="light" style={{color: "forestgreen"}}>
                <Container>
                   <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                         <Nav.Link as={Link} to="/volunteer">Volunteer</Nav.Link>        
                        <Nav.Link as={Link} to="/aboutus" >About us</Nav.Link>
                        <Nav.Link as={Link} to="/donate">Donate</Nav.Link>                    
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                    <Outlet />
            </div>
        </div>
    );
}

export default EnvoLayout;