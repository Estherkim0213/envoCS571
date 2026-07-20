import React, { memo, useState } from "react"
import { Form, Button, Container} from "react-bootstrap";


function EnvoDonate () {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");


    return <>
        <Container style={{flex:2}}>
            <h1>Donate</h1>
            <p>Heres some information about us!
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec 
                lacus eu enim lobortis volutpat. Integer sollicitudin libero vitae faucibus
             pretium. Nulla eget ullamcorper nisi. Donec at maximus ipsum. Duis at finibus purus. 
             Curabitur sit amet porttitor nibh, in mattis ex. Vestibulum pellentesque placerat congue.
              Morbi sed erat sit amet quam volutpat facilisis vel venenatis quam. Pellentesque accumsan
            </p>
        </Container>
        
        <Form style={{display:"flex", flexDirection:"column", margin: 20 ,flex: 1, 
            borderWidth:1, borderStyle: "solid", borderColor:"grey", padding: 5, gap:15}} >

            <div style={{display:"flex", flexDirection:"row"}}>
                <input id="name"
                value={name}
                placeholder="First Name"
                onChange={(e) => setName(e.target.value)}/>
                <input id="name"
                value={name}
                placeholder="Last Name"
                onChange={(e) => setName(e.target.value)}/>
            </div>

            <input id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}/>

            <input id="number"
            value={number}
            placeholder="Street Address"
            onChange={(e) => setNumber(e.target.value)}/>
            <input id="number"
            value={number}
            placeholder="City"
            onChange={(e) => setNumber(e.target.value)}/>
            <input id="number"
            value={number}
            placeholder="State"
            onChange={(e) => setNumber(e.target.value)}/>
            <input id="number"
            value={number}
            placeholder="Phone Number"
            onChange={(e) => setNumber(e.target.value)}/>

            <Button type='submit' style={{margin:10}}>Register</Button>
        </Form>
    </>
}

export default EnvoDonate;
