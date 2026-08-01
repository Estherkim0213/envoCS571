
import React, { memo, useState } from "react"
import Select from 'react-select'
import hand from '../../assets/hand.jpg'
import chicago from'../../assets/chicago.jpg'


import { Form, Button} from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";
  

function Aboutus () {
    
    return <div style={{display:"flex", flexDirection: "column", gap: 80}}>
        <div style={{backgroundColor:"black", opacity:"90%", position:"relative"}}>
            <img src={hand} alt="hand holding dirt and a plant" style={{opacity: "50%", width: "100%", height:600, objectFit:"cover"}}/>

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
                <h1>About Us</h1>
                <p style={{color: "white"}}> Want to know more about us? Here are some facts on what we do, 
                    what our mission is, and how we implement it!
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

            <Container style={{ flex:4, display:"flex", flexDirection:"column", padding: 20, gap: 50}}>
            
                <div style={{ display:"flex", flexDirection:"column"}}>
                <h2 style={{fontSize: 35}}>Who we are</h2>
                <p>We are a growing nonprofit community of people who love to help our planet. However, we are not just a community,
                    we are a family, an ever growing family at that. We care for each other as much as we care for our planet.
                    This is why we must stand beside each other in harships and troubles, especially in the city of Chicago.
                    We plant more trees in parks and advocate for more funding in nature conservations, we do it all.
                    Come join our Envo family and help impact the planet, the people,and the animals!
                </p>
                </div>


                <div style={{ display:"flex", flexDirection:"column",}}>
                <h2 style={{fontSize: 35}}>Where We're located</h2>
                <p>We are based in the good ol' state of Illinois! Home of Abraham Lincoln,
                    we pride ourselves in advocating in change and diversity. We are specifically based 
                    in the city of Chicago, one of the most diverse cities in the nation! 
                </p>
                    <div style={{display: "flex", flexDirection:"row",}}>
                            <img src={chicago} alt="picture of chicago river" style={{maxWidth: 400, height: 400, objectFit:"cover",}}/>
                            <div style={{display: "flex",
                                        flexDirection: "column", 
                                        justifyContent:"center", 
                                        alignItems: "center",
                                        width: "100%",
                                        height: "100%",
                                        padding: 70,
                                        gap: 15}}>
                                <h2 >Chicago Summer</h2>
                                <p>Every year during st patricks day, we host the annua; st patricks day duck race
                                    to raise money for bigger projects that can impact bigger communities
                                </p>
                            </div>
                    </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column"}}>
                <p>We host all kinds of panels that you can be a part of.
                We have hosted multiple great people here with Envo, including a special host
                with Kamala Harris. These talks are including but not limited to calculating your carbon footprint,
                recent legislature, or other organizations that want to express their goals.</p>
                </div>

                <div style={{ display:"flex", flexDirection:"column"}}>
                <h2 style={{fontSize: 35}}>Our story</h2>
                <p>We started in the garage of a group of friends who wanted to make change, but didn't know how to. 
                    They teamed up together to create this nonprofit and would collaborate with their highschool teachers 
                    and later on college professors as well. This is a story of 4 kids in the suburbs of chicago who wanted
                    to make change and did. This just goes to prove that nothing is impossible, and that with hard work and
                    effort, good things will come in the end.
                </p>
                </div>

            </Container>

        </div>

        
        
    </div>
}

export default Aboutus;
