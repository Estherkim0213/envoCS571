import React, { memo, useState } from "react"
import Select from 'react-select'

import { Form, Button} from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";



const options = [
  { value: 'Computer Systems', label: 'Computer Systems' },
  { value: 'Working in Fields', label: 'Working in Fields' },
  { value: 'Finance Organizer', label: 'Finance Organizer' }
]
  

function EnvoVolunteer () {
    
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const submitForm = () =>{
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('number', number);
        sessionStorage.setItem('email', email);
    }

    return <>
        <h1>Volunteer</h1>
        <p style={{fontSize:14}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec 
            lacus eu enim lobortis volutpat. Integer sollicitudin libero vitae faucibus
             pretium. Nulla eget ullamcorper nisi. Donec at maximus ipsum. Duis at finibus purus. 
             Curabitur sit amet porttitor nibh, in mattis ex. Vestibulum pellentesque placerat congue.
              Morbi sed erat sit amet quam volutpat facilisis vel venenatis quam. Pellentesque accumsan, 
              nisi at auctor vestibulum, mi velit scelerisque est, quis commodo magna urna sed magna.
              <br/>
            Fusce vehicula scelerisque scelerisque. Suspendisse interdum ultricies lorem fermentum 
            elementum. Fusce aliquam erat quis diam posuere pretium. Nullam non elit vel dolor
             accumsan interdum sit amet sed lectus. Proin vel dictum sapien. Proin ac mi massa. Maecenas 
             congue, enim quis tincidunt imperdiet, tortor elit facilisis neque, id malesuada ligula nibh 
             quis lectus. Nullam sit amet interdum nisl.
             <br/>
            Proin eu elit volutpat, placerat massa ac, porta ligula. Sed mi diam, convallis sed lorem 
            vitae, eleifend rhoncus lacus. Integer id dignissim lorem, ut accumsan neque. Fusce sodales, 
            nunc eget rhoncus ullamcorper, dui nisi sollicitudin erat, eu mattis ligula enim eget nisi. Ut 
            varius hendrerit felis, vel hendrerit lorem fermentum quis. In hac habitasse platea dictumst. 
            Mauris nec tempor ipsum. Nullam magna purus, malesuada et tellus quis, sodales varius dui. Nam 
            luctus blandit nibh. Integer dictum lacus in sem tristique gravida.
        </p>

        <div id="allContainer" style={{display:"flex", justifyContent:"space-between"}}>

            <Container style={{flex:1}} >
                <Nav className="flex-column">
                    <Nav.Link as={Link} to="/volunteer">Volunteer info</Nav.Link>        
                    <Nav.Link as={Link} to="/" >Volunteer</Nav.Link>
                    <Nav.Link as={Link} to="/donate">Speak out</Nav.Link>                    
                </Nav>
            </Container>
            <Outlet /> 

            <Container style={{ flex:4}}>
                <h2>Register</h2>
                <Form style={{display:"flex", flexDirection:"column", margin: 20}} onSubmit={submitForm}>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <input id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>

                    <Form.Label htmlFor="number">Phone Number</Form.Label>
                    <input id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}/>

                    <Form.Label htmlFor="email">Email</Form.Label>
                    <input id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <Select options={options} />

                    <Button type='submit' style={{margin:10}}>Register</Button>
                </Form>
            </Container>

        </div>

        
        
    </>
}

export default EnvoVolunteer;
