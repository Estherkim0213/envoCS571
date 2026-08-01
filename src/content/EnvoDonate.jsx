import React, { memo, useState } from "react"
import { Form, Button, Container} from "react-bootstrap";
import Select from 'react-select'

import park from '../assets/park.jpg'



function EnvoDonate () {
    //donation
    const [amount, setAmount] = useState();

    //billing
    const [firstname, setFirstname] = useState("");
    const [last, setLast] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const [errormsg, setErrormsg] = useState("");

    //card info
    const [cardnum, setCardnum] = useState();
    const [cvc, setCvc] = useState();

    // obtained from https://gist.github.com/NickFoden/2fdb2d7941bb166dd39c2b90910dc066
    const options = [
  { value: "AL", label: "AL - Alabama" },
  { value: "AK", label: "AK - Alaska" },
  { value: "AZ", label: "AZ - Arizona" },
  { value: "AR", label: "AR - Arkansas" },
  { value: "CA", label: "CA - California" },
  { value: "CO", label: "CO - Colorado" },
  { value: "CT", label: "CT - Connecticut" },
  { value: "DE", label: "DE - Delaware" },
  { value: "DC", label: "DC - District Of Columbia" },
  { value: "FL", label: "FL - Florida" },
  { value: "GA", label: "GA - Georgia" },
  { value: "HI", label: "HI - Hawaii" },
  { value: "ID", label: "ID - Idaho" },
  { value: "IL", label: "IL - Illinois" },
  { value: "IN", label: "IN - Indiana" },
  { value: "IA", label: "IA - Iowa" },
  { value: "KS", label: "KS - Kansas" },
  { value: "KY", label: "KY - Kentucky" },
  { value: "LA", label: "LA - Louisiana" },
  { value: "ME", label: "ME - Maine" },
  { value: "MD", label: "MD - Maryland" },
  { value: "MA", label: "MA - Massachusetts" },
  { value: "MI", label: "MI - Michigan" },
  { value: "MN", label: "MN - Minnesota" },
  { value: "MS", label: "MS - Mississippi" },
  { value: "MO", label: "MO - Missouri" },
  { value: "MT", label: "MT - Montana" },
  { value: "NE", label: "NE - Nebraska" },
  { value: "NV", label: "NV - Nevada" },
  { value: "NH", label: "NH - New Hampshire" },
  { value: "NJ", label: "NJ - New Jersey" },
  { value: "NM", label: "NM - New Mexico" },
  { value: "NY", label: "NY - New York" },
  { value: "NC", label: "NC - North Carolina" },
  { value: "ND", label: "ND - North Dakota" },
  { value: "OH", label: "OH - Ohio" },
  { value: "OK", label: "OK - Oklahoma" },
  { value: "OR", label: "OR - Oregon" },
  { value: "PA", label: "PA - Pennsylvania" },
  { value: "PR", label: "PR - Puerto Rico" },
  { value: "RI", label: "RI - Rhode Island" },
  { value: "SC", label: "SC - South Carolina" },
  { value: "SD", label: "SD - South Dakota" },
  { value: "TN", label: "TN - Tennessee" },
  { value: "TX", label: "TX - Texas" },
  { value: "UT", label: "UT - Utah" },
  { value: "VT", label: "VT - Vermont" },
  { value: "VI", label: "VI - Virgin Islands" },
  { value: "VA", label: "VA - Virginia" },
  { value: "WA", label: "WA - Washington" },
  { value: "WV", label: "WV - West Virginia" },
  { value: "WI", label: "WI - Wisconsin" },
  { value: "WY", label: "WY - Wyoming" }
];


    const donation = () =>{
        if (firstname === "" || last === "" || number === "" || 
            email === "" ||address === "" ||city === "" ||state === ""){
                setErrormsg(e => e = "Must enter valid Billing Information");
                return
        }
        else if (cardnum === "" || cvc === ""){
            setErrormsg(e => e = "Must enter valid Card Information");
            return
        }

        setErrormsg(e => e = "");
        setAddress("");
        setAmount("");
        setCardnum("");
        setCity("");
        setCvc("");
        setEmail("");
        setFirstname("");
        setLast("");
        setNumber("");
        setState("");
        alert(`Thank you for donating $${amount}!`)
    }


    return <div style={{display:"flex", flexDirection: "column", gap: 30}}>

        <div style={{backgroundColor:"black", opacity:"90%", position:"relative"}}>
            <img src={park} style={{opacity: "50%", width: "100%", height:300, objectFit:"cover"}}/>

            <div style={{position:"absolute", 
                        top:0, 
                        left: 0,
                        display: "flex",
                        flexDirection: "column", 
                        justifyContent:"center", 
                        alignItems: "center",
                        width: "100%",
                        height: "100%",}}>
                <h2 style={{color: "white"}}> Donation</h2>
            </div>
        </div>
        
        
        <Form style={{display:"flex", flexDirection:"column",flex: 1, padding: 40, gap:30, margin: 100}}>

            <div style={{display:"flex", flexDirection: "column",textAlign:"left", gap:20}}>
            <strong>1. Donation Amount</strong>
            <div style={{display:"flex", flexDirection: "row", gap:10, scale:1.2, marginLeft:90}}>
                <Button style={{backgroundColor: "darkgreen"}}
                    onClick={() => setAmount(e => e = 25)}>$25</Button>
                <Button style={{backgroundColor: "darkgreen"}}
                    onClick={() => setAmount(e => e = 50)}>$50</Button>
                <Button style={{backgroundColor: "darkgreen"}}
                    onClick={() => setAmount(e => e = 100)}>$100</Button>
            </div>
            <input id="amount"
                    value={amount}
                    type="number"
                    placeholder="0.00"
                    style={{width:"50%", height:50, padding: 10, fontSize:18}}
                    onChange={(e) => setAmount(e.target.value)}/>
            </div>

            <div style={{display:"flex", flexDirection: "column",textAlign:"left", gap:10}}>
            <strong>2. Billing Details</strong>
                <div style={{display:"flex", flexDirection:"row", gap:15}}>
                    <input id="firstname"
                    value={firstname}
                    placeholder="First Name"
                    onChange={(e) => setFirstname(e.target.value)}/>
                    <input id="last"
                    value={last}
                    placeholder="Last Name"
                    onChange={(e) => setLast(e.target.value)}/>
                </div>

                <input id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}/>

                <input id="address"
                value={address}
                placeholder="Street Address"
                onChange={(e) => setAddress(e.target.value)}/>

                <input id="city"
                value={city}
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}/>

                <div style={{display:"flex", flexDirection:"row", gap:15}}>
                    <Select 
                    options={options} 
                    placeholder="State" 
                    id="state"
                    value={state}
                    onChange={(e) => setState(e)}/>

                    <input id="number"
                    value={number}
                    placeholder="Phone Number"
                    type="number"
                    onChange={(e) => setNumber(e.target.value)}/>
                    
                </div>
            </div>

            <div style={{display:"flex", flexDirection: "column",textAlign:"left",}}>
            <strong> 3.Card Details</strong>
            <div style={{display:"flex", flexDirection:"row", gap:15}}>
                <input style={{flex:4}}
                id="card"
                value={cardnum}
                type="number"
                placeholder="Card Number"
                onChange={(e) => setCardnum(e.target.value)}/>

                <input style={{flex:1}}
                id="cvc"
                value={cvc}
                type="number"
                placeholder="CVC"
                type="password"
                onChange={(e) => setCvc(e.target.value)}/>
            </div>
            </div>

            <p hidden={!errormsg} style={{color:"red"}}>{errormsg}</p>
            <Button onClick={donation} style={{margin:10, width: 100}}>Donate</Button>
        </Form>
    </div>
}

export default EnvoDonate;
