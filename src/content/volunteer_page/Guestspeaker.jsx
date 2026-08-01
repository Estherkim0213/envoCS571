import React, { memo, useState } from "react"
import Select from 'react-select'
import guestpanel from '../../assets/guestpanel.webp'
import guest1 from '../../assets/guestspeaker1.webp'
import guest2 from '../../assets/guestspeaker2.jpg'

import { Form, Button} from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";
  

function Guestspeaker () {
    
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const [errormsg, setErrormsg] = useState("");

    const submitForm = () =>{
        if (first === "" || last === "" || email === ""){
            setErrormsg("Please fill out all required inputs");
            return;
        }

        setErrormsg(e => e = "");
        sessionStorage.setItem('first', first);
        sessionStorage.setItem('last', last);
        sessionStorage.setItem('number', number);
        sessionStorage.setItem('email', email);

        setEmail(e => e = "");
        setFirst(e => e = "");
        setLast(e => e = "");
        setNumber(e => e = "");

        alert(`Thanks ${first} for signing up to be Guest Speaker! We will email you shortly with more info`)
    }

    return <div style={{display:"flex", flexDirection: "column", gap: 80}}>

        <div style={{backgroundColor:"black", opacity:"90%", position:"relative"}}>
            <img src={guestpanel} alt="panel with 4 people sitting" style={{opacity: "50%", width: "100%", height:600, objectFit:"cover"}}/>

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
                <h1>Guest Speakers</h1>
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
            
            <div style={{display: "flex", flexDirection: "column", flex:4, gap:40}}>
                <p>We host all kinds of panels that you can be a part of.
                We have hosted multiple great people here with Envo, including a special host
                with Kamala Harris. These talks are including but not limited to calculating your carbon footprint,
                recent legislature, or other organizations that want to express their goals.</p>

                <div style={{display: "flex", flexDirection:"row",}}>
                        <img src={guest1} alt="image of Jude SUmmit talking" style={{maxWidth: 300, height: 400, objectFit:"cover", marginTop:50}}/>
                        <div style={{display: "flex",
                                    flexDirection: "column", 
                                    justifyContent:"center", 
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    padding: 70,
                                    gap: 15}}>
                            <h3>"Earth does not belong to us, we belong to earth"</h3>
                            <h2 >Jude Summit</h2>
                            <p>In her panel concerning the recent overthrown bill, Summit expands on the idea of
                                keeping yourself and others in check and bills that are currently being passed in our neighborhoods.
                                She states that small changes are what keeps communities going, and small changes in community
                                become big things.
                            </p>
                        </div>
                </div>

                <p>We host all kinds of panels that you can be a part of.
                We have hosted multiple great people here with Envo, including a special host
                with Kamala Harris. These talks are including but not limited to calculating your carbon footprint,
                recent legislature, or other organizations that want to express their goals.</p>

                <div style={{display: "flex", flexDirection:"row",}}>
                        <div style={{display: "flex",
                                    flexDirection: "column", 
                                    justifyContent:"center", 
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    gap: 15}}>
                            <h3>"... because what else would we be, if not specks of dirt in the universe"</h3>
                            <h2 >Desiree Fixler</h2>
                            <p>In her panel concerning the recent overthrown bill, Summit expands on the idea of
                                keeping yourself and others in check and what you can do to help out the community.
                                She states that small changes are what keeps communities going, and small changes in community
                                become big things.</p>
                        </div>
                        <img src={guest2} alt="image of Desiree Fixler talking" style={{maxWidth: 300, height: 400, objectFit:"cover", margin: 80}}/>
                </div>

                <p>We host all kinds of panels that you can be a part of.
                We have hosted multiple great people here with Envo, including a special host
                with Kamala Harris. These talks are including but not limited to calculating your carbon footprint,
                recent legislature, or other organizations that want to express their goals.</p>
                <h3>Want to be a Guest Speaker?</h3> 


                <div style={{borderColor: "grey", borderStyle: "solid", borderWidth:1, padding: 30, margin:50}}>
                    <h2>Register to be Guest Speaker</h2>
                    <Form style={{display:"flex", flexDirection:"column", gap: 20}}>

                        <div style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
                            <Form.Label htmlFor="name">Name*</Form.Label>
                            <div style={{display:"flex", flexDirection:"row", gap: 10}}>
                                <input id="first"
                                value={first}
                                placeholder="First"
                                onChange={(e) => setFirst(e.target.value)}/>
                                <input id="last"
                                value={last}
                                placeholder="Last"
                                onChange={(e) => setLast(e.target.value)}/>
                            </div>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
                            <Form.Label htmlFor="email">Email*</Form.Label>
                            <input id="email"
                            value={email}
                            placeholder="example@email.com"
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
                            <Form.Label htmlFor="number">Phone Number</Form.Label>
                            <input id="number"
                            value={number}
                            placeholder="Optional"
                            style={{fontStyle:"italic"}}
                            onChange={(e) => setNumber(e.target.value)}/>
                        </div>

                        <p hidden={!errormsg} style={{color:"red"}}>{errormsg}</p>
                        <Button style={{margin:10}} onClick={submitForm}>Register</Button>
                    </Form>
                </div>
            </div>

        </div>
    </div>
}

export default Guestspeaker;
