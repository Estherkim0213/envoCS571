import React, { memo, useState} from "react"
import blankpic from '../assets/blankpic.png'
import ppl from '../assets/staff.jpg'

import { Form, Button} from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown, Card, Row, Col} from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";


function EnvoAboutUs () {

    const staff = [
        {name: "Melia Harris", role:"Senior Developer"}, 
        {name: "Wyatt Smith", role: "Head of Finance"}, 
        {name: "Esther Kim", role: "CEO"}, 
        {name:"Cat Nelson", role: "Director"}, 
        {name: "Ruijia Chen", role:"Operations Manager"}
    ];

    return <div style={{display:"flex", flexDirection: "column", gap: 80}}>

        <div style={{backgroundColor:"black", opacity:"90%", position:"relative"}}>
            <img src={ppl} style={{opacity: "50%", width: "100%", height:600, objectFit:"cover"}}/>

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
                <h1>Meet Our Crew</h1>
                <p style={{color: "white"}}> Starting with a team of only 4, 
                        we now have grown our family to over 1000! 
                        <br/>
                        Meet the Staff who make all of this happen!
                    </p>
            </div>
        </div>

        <div id="allContainer" style={{display:"flex", justifyContent:"space-between"}}>

            <Container style={{flex:1}} >
                <Nav className="flex-column">
                    <Nav.Link as={Link} to="/staff">Staff</Nav.Link>        
                    <Nav.Link as={Link} to="/aboutus" >About us</Nav.Link>
                    <Nav.Link as={Link} to="/sponsors">Sponsors</Nav.Link> 
                    <Nav.Link as={Link} to="/annualdata">Annual data</Nav.Link>                    
                </Nav>
            </Container>
            <Outlet /> 
            
            <Container style={{flex:4}}>
            <h2>Meet our Staff</h2>
            <Row>
                {
                    staff.map( element =>(
                        <Col xs={12} md={6} lg={4} xl={4} key={element.name}>
                            <Card style={{margin: "0.5rem", padding: "0.5rem"}}>
                                <img src={blankpic} alt="staff picture"/>
                                <h2>{element.name}</h2>
                                <i>{element.role}</i>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            </Container>
            

        </div>
    </div>
}

export default EnvoAboutUs;
