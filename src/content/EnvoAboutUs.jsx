import React, { memo, useState} from "react"
import blankpic from '../assets/blankpic.png'


import { Form, Button} from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown, Card, Row, Col} from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";


function EnvoAboutUs () {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const staff = ["Melia Harris", "Wyatt Smith", "Esther Kim", "Cat Nelson", "Saranya Sahhid"];
    const desc = ". Nulla eget ullamcorper nisi. Donec at maximus ipsum. Duis at finibus purus. Curabitur sit amet porttitor nibh, in mattis ex. Vestibulum pellentesque placerat congu"

    return <>
        <h1>About Us</h1>
        <p>Heres some information about us! We are a nonprofit organization 
            that focuses on saving our local and bigger forests! We started off with 
            a team of only 4 people but not have grown to be upwards to 1000!
            <br/>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec lacus 
            eu enim lobortis volutpat. Integer sollicitudin libero vitae faucibus pretium. 
            Nulla eget ullamcorper nisi. Donec at maximus ipsum. Duis at finibus purus. 
            Curabitur sit amet porttitor nibh, in mattis ex. Vestibulum pellentesque placerat 
            congue. Morbi sed erat sit amet quam volutpat facilisis vel venenatis quam. 
            Pellentesque accumsan, nisi at auctor vestibulum, mi velit scelerisque est, 
            quis commodo magna urna sed magna.
        </p>

        <div id="allContainer" style={{display:"flex", justifyContent:"space-between"}}>

            <Container style={{flex:1}} >
                <Nav className="flex-column">
                    <Nav.Link as={Link} to="/volunteer">Staff</Nav.Link>        
                    <Nav.Link as={Link} to="/" >About us</Nav.Link>
                    <Nav.Link as={Link} to="/donate">Sponsers</Nav.Link> 
                    <Nav.Link as={Link} to="/donate">Annual data</Nav.Link>                    
                </Nav>
            </Container>
            <Outlet /> 
            
            <Container>
            <h2>Meet our Staff</h2>
            <Row>
                {
                    staff.map( element =>(
                        <Col xs={12} md={6} lg={4} xl={3} key={element}>
                            <Card style={{margin: "0.5rem", padding: "0.5rem"}}>
                                <img src={blankpic} alt="staff picture"/>
                                <h2>{element}</h2>
                                <i>role</i>
                                <p>{desc}</p>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            </Container>
            

        </div>
    </>
}

export default EnvoAboutUs;
