
import React, { memo, useState } from "react"
import Select from 'react-select'
import annual from '../../assets/data.jpg'

import { Form, Button} from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, Route } from "react-router";
  

function Annualdata () {
    
    return <div style={{display:"flex", flexDirection: "column", gap: 80}}>
        <div style={{backgroundColor:"black", opacity:"90%", position:"relative"}}>
            <img src={annual} style={{opacity: "50%", width: "100%", height:600, objectFit:"cover"}}/>

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
                <h1>Annual Data</h1>
                <p style={{color: "white"}}> We are very transparent on what we do and 
                    how much we spend on these things. No lies. No cover up.
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
                <h2 style={{fontSize: 35}}>Where Does Our Money Go?</h2>
                <p>The money we raise goes to the planet and all our initiative. Nothing that we raise ever
                    goes into our pockets, which of suprisingly seems to be an unordinary occurence.
                    We have been expanding our ever growing mission to other parts of the nation and
                    planning on expanding globally. Of course, our staff is not without pay. Their hard work needs to 
                    be rewarded (also this is their 9-5) so we make sure to have equal pay and pride ourselved in it! 
                    We were rewarded as a company with most fair pay!
                </p>
                </div>

                <div>
                    <h1 style={{color: "black", fontSize: 40, marginLeft: 40, marginRight: 40}}>
                    In 2025, we raised just over <strong style={{color:"chocolate"}}>$120,000 </strong>as a collective!</h1>
                </div>

                <div style={{display: "flex", flexDirection:"row"}}>
                    <div style={{display: "flex",
                                flexDirection: "column", 
                                justifyContent:"center", 
                                alignItems: "center",
                                width: "100%",
                                height: "100%",
                                padding: 70,
                                gap: 15}}>
                        <h3>Trees Planted</h3>
                        <h2 >In 2025 we have planted over <strong style={{fontSize: 30, color:"chocolate"}}>50,000 </strong>
                          trees in North America.</h2>
                        <p>Envo statistics</p>
                    </div>
                    <div style={{display: "flex",
                                flexDirection: "column", 
                                justifyContent:"center", 
                                alignItems: "center",
                                width: "100%",
                                height: "100%",
                                padding: 70,
                                gap: 15}}>
                        <h3>Community Impact</h3>
                        <h2> We as a community collectively participated in just under  
                            <strong style={{fontSize: 30, color:"chocolate"}}>30 meetings </strong>about 
                            environmental legislature,  <strong style={{fontSize: 30, color:"chocolate"}}>15 hearing </strong>
                            on passing bills, and <strong style={{fontSize: 30, color:"chocolate"}}>40 panels </strong>connected
                            with our organization in 2025!
                        </h2>
                        <p>Envo statistics</p>
                    </div>
                </div>

                <div>
                    <h1 style={{color: "black", fontSize: 40, marginLeft: 40, marginRight: 40}}>
                    In 2025, this was how much went into our bank account: <strong style={{color:"chocolate"}}>$0</strong></h1>
                    <p>Thats right, no BS, we're here for our community, not for ourselves unlike other organizations</p>
                </div>

                <div style={{ display:"flex", flexDirection:"column",}}>
                <h2 style={{fontSize: 35}}>How We Calculate Our Data</h2>
                <p>With the help of our financial volunteers and our head finance director, we spend
                    grueling hours calculating our data for better help into the community. Now I've been writing too much and I also
                    doubt that you're going to read all of this because it's in the middle and now I'm going to end it with and thats how our
                    data is being collected and displayed onto our website!  
                </p>
                    <div style={{display: "flex", flexDirection:"row",}}>
                            <img src={annual} style={{maxWidth: 400, height: 400, objectFit:"cover",}}/>
                            <div style={{display: "flex",
                                        flexDirection: "column", 
                                        justifyContent:"center", 
                                        alignItems: "center",
                                        width: "100%",
                                        height: "100%",
                                        padding: 70,
                                        gap: 15}}>
                                <h2 >Annual Spendings</h2>
                                <p>In 2025 we have spent $200,000 on our initiative including transportation,
                                    housing, and volunteer hours that were donated!
                                </p>
                            </div>
                    </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column"}}>
                <p>Why yes, there is more! Our data goes to show that just 5% of actual nonprofit organizations donate all their donations.
                    Yes there is more text down here. How do these websites have so much to say? Why I don't know
                    I never really had an organization like this. I'm just making it up, but I think the UI is looking pretty good 
                    if I do say so myself. Why now theres more data and more data that I love talking about and more numbers like 300 and
                    even bigger numbers like 50,000 people and our community has been impacted so much.</p>
                </div>


            </Container>

        </div>

        
        
    </div>
}

export default Annualdata;
