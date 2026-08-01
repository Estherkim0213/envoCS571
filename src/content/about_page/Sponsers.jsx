import React, { memo, useState } from "react"
import Select from 'react-select'
import sponsor from '../../assets/sponsor.png'
import sponsor1 from '../../assets/sponsor.jpg'


import { Form, Button} from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";
  

function Sponsers () {
    
    return <div style={{display:"flex", flexDirection: "column", gap: 80}}>
        <div style={{backgroundColor:"black", opacity:"90%", position:"relative"}}>
            <img src={sponsor1} alt="hand holding green with people on top" style={{opacity: "50%", width: "100%", height:600, objectFit:"cover"}}/>

            <div style={{position:"absolute", 
                        top:0, 
                        left: 0,
                        display: "flex",
                        flexDirection: "column", 
                        justifyContent:"center", 
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        padding: 60}}>
                <h1>Sponsors</h1>
                <p style={{color: "white"}}> We couldn't do our mission without our sponsors!
                </p>
            </div>
        </div>

        <div id="allContainer" style={{display:"flex", justifyContent:"space-between"}}>

            <Container style={{flex:1}} >
                <Nav className="flex-column" >
                    <Nav.Link as={Link} to="/staff">Staff</Nav.Link>        
                    <Nav.Link as={Link} to="/aboutus" >About us</Nav.Link>
                    <Nav.Link as={Link} to="/sponsors">Sponsors</Nav.Link> 
                    <Nav.Link as={Link} to="/annualdata">Annual data</Nav.Link>                         
                </Nav>
            </Container>
            <Outlet /> 

            <img src={sponsor} alt="picture with all the sponsors" style={{width:500, height:"100%", flex:4, padding: 80}}/>

        </div>

        
        
    </div>
}

export default Sponsers;
