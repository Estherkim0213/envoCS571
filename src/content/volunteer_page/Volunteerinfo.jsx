import React, { memo, useState } from "react"
import Select from 'react-select'
import volunteer1 from'../../assets/volunteer.jpg'

import { Form, Button} from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";

function Volunteerinfo () {
    
    return <div style={{display:"flex", flexDirection: "column", gap: 80}}>
        <div style={{backgroundColor:"black", opacity:"90%", position:"relative"}}>
            <img src={volunteer1} style={{opacity: "50%", width: "100%", height:600, objectFit:"cover"}}/>

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
                <h1>Volunteer Info</h1>
                <p style={{color: "white"}}> We host all kinds of panels that you can be a part of.
                        We have hosted multiple great people here with Envo, including a special host
                        with Kamala Harris. These talks are including but not limited to calculating your carbon footprint,
                        recent legislature, or other organizations that want to express their goals.
                </p>
            </div>
        </div>

        <div id="allContainer" style={{display:"flex", justifyContent:"space-between"}}>

            <Container style={{flex:1}} >
                <Nav className="flex-column" >
                    <Nav.Link as={Link} to="/volunteerinfo">Volunteer info</Nav.Link>        
                    <Nav.Link as={Link} to="/volunteer" >Volunteer</Nav.Link>
                    <Nav.Link as={Link} to="/guestspeaker">Guest Speakers</Nav.Link>  
                </Nav>
            </Container>
            <Outlet /> 

            <Container style={{ flex:4, display:"flex", flexDirection:"column", margin: 20, gap: 20}}>

                <div style={{ display:"flex", flexDirection:"column", textAlign:"left"}}>
                <h2>Finances</h2>
                <p>We host all kinds of panels that you can be a part of.
                We have hosted multiple great people here with Envo, including a special host
                with Kamala Harris. These talks are including but not limited to calculating your carbon footprint,
                recent legislature, or other organizations that want to express their goals.</p>
                </div>

                <div style={{ display:"flex", flexDirection:"column", textAlign:"left"}}>
                <h2>Tree Planting</h2>
                <p>We host all kinds of panels that you can be a part of.
                We have hosted multiple great people here with Envo, including a special host
                with Kamala Harris. These talks are including but not limited to calculating your carbon footprint,
                recent legislature, or other organizations that want to express their goals.</p>
                </div>

                <div style={{ display:"flex", flexDirection:"column", textAlign:"left"}}>
                <h2>Garbage Picker</h2>
                <p>We host all kinds of panels that you can be a part of.
                We have hosted multiple great people here with Envo, including a special host
                with Kamala Harris. These talks are including but not limited to calculating your carbon footprint,
                recent legislature, or other organizations that want to express their goals.</p>
                </div>

                <div style={{ display:"flex", flexDirection:"column", textAlign:"left"}}>
                <h2>IT Systems</h2>
                <p>We host all kinds of panels that you can be a part of.
                We have hosted multiple great people here with Envo, including a special host
                with Kamala Harris. These talks are including but not limited to calculating your carbon footprint,
                recent legislature, or other organizations that want to express their goals.</p>
                </div>

            </Container>

        </div>

        
        
    </div>
}

export default Volunteerinfo;
