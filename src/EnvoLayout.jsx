import React, { useState, useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";

import planthand from './assets/planthand.jpg'


function EnvoLayout(props) {

    return (
        <div>
            <Navbar >
                <Container style={{margin:0}}>
                   <Nav>
                        <Nav.Link as={Link} to="/">
                            <img src={planthand} style={{height: 50, width: 85, marginTop:-10}}/>
                        </Nav.Link>
                        
                        <Nav.Link as={Link} to="/" style={{marginTop:5}}>Home</Nav.Link>

                        <NavDropdown 
                        className="custom-dropdown-box"
                        title = "Get Involved" style={{marginTop:5, position:"relative"}}>
                            <div>
                                <NavDropdown.Item as={Link} to="/volunteer"> Volunteer </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/volunteerinfo" >Volunteer Info</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/guestspeaker" >Guest Speaker</NavDropdown.Item>
                            </div>
                        </NavDropdown>   

                         <NavDropdown 
                        className="custom-dropdown-box"
                        title = "About us" style={{marginTop:5, position:"relative"}}>
                            <div>
                                <NavDropdown.Item as={Link} to="/aboutus" > About us</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/staff" >Staff</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/sponsors" >Sponsers</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/annualdata" >Annual Data</NavDropdown.Item>
                            </div>
                        </NavDropdown>       

                        <Nav.Link 
                            as={Link} 
                            to="/donate" 
                            style={{backgroundColor: "darkgreen", color:"white", borderRadius:10, marginLeft: 10, height: 40, marginTop:5}}>
                            Donate
                        </Nav.Link>                    
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default EnvoLayout;