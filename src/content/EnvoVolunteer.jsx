import React, { memo, useState } from "react"
import Select from 'react-select'

import { Form, Button} from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";

import volunteer from "../assets/volunteer.webp"



const options = [
  { value: 'finances', label: 'Finances' },
  { value: 'tree planting', label: 'Tree Planting' },
  { value: 'garbage picker', label: 'Garbage Picker' },
  { value: 'IT', label: 'IT Systems' }
]
  

function EnvoVolunteer () {
    
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

        alert(`Thanks ${first} for signing up to Volunteer! We will email you shortly with more info`)
    }

    return <div style={{display:"flex", flexDirection:"column", gap: 80}}>
        <div style={{backgroundColor:"black", opacity:"90%", position:"relative"}}>
            <img src={volunteer} style={{opacity: "50%", width: "100%", height:600, objectFit:"cover"}}/>

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
                <h1>Volunteer</h1>
                <p style={{color: "white"}}>Donate your time and spend your weekend doing good for your community! 
                    Our environment is only impacted as much as the people who put in the effort, which is why we value each
                    volunteer and makes your work so much more impactful. We offer a variety of roles, some with more extensive processes
                    than others. Want to do something fun with friends and family? Sign up! 
                    Curious about what you'll be doing? Check our our volunteer info page! </p>
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

            <div style={{margin:50, flex:4}}>
             <p >Donate your time and spend your weekend doing good for your community! 
                    Our environment is only impacted as much as the people who put in the effort, which is why we value each
                    volunteer and makes your work so much more impactful. We offer a variety of roles, some with more extensive processes
                    than others. Want to do something fun with friends and family? Sign up! 
                    Curious about what you'll be doing? Check our our volunteer info page! </p>

            <div style={{borderColor: "grey", borderStyle: "solid", borderWidth:1, padding: 30}}>
                <h2>Register</h2>
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

                    <Select options={options}/>

                    <p hidden={!errormsg} style={{color:"red"}}>{errormsg}</p>
                    <Button style={{margin:10}} onClick={submitForm}>Register</Button>
                </Form>
            </div>
            </div>

        </div>

        
        
    </div>
}

export default EnvoVolunteer;
