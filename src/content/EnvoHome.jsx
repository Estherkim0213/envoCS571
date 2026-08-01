import React, { memo, useEffect, useState } from "react"
import planthand from '../assets/planthand.jpg'
import forest from  '../assets/forest.jpg'
import woods from '../assets/woods.png'
import panel from '../assets/guestspeaker3.webp'
import insta from "../assets/insta.png"
import '../App.css'

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router';
import {motion} from "motion/react"
import { Button, Container } from "react-bootstrap";

function EnvoHome () {
    const navigate = useNavigate();
    return <div style={{display: "flex", flexDirection:"column", gap: 80}}>

        <div style={{backgroundColor:"black", opacity:"90%", position:"relative"}}>
            <img src={forest} style={{opacity: "50%", maxWidth: "100%", width: "fit-content"}}/>

            <div style={{position:"absolute", 
                        top:0, 
                        left: 0,
                        display: "flex",
                        flexDirection: "column", 
                        justifyContent:"center", 
                        alignItems: "center",
                        width: "100%",
                        height: "100%"}}>
                <h1>Welcome to Envo!</h1>
                <h2 style={{color: "white"}}>Help our mission to save our planet!</h2>
            </div>
        </div>
              
        <div style={{display: "flex", flexDirection:"row"}}>
            <img src={woods} style={{maxWidth: 700, height: 600, marginLeft: 50, objectFit:"cover"}}/>
            <div style={{display: "flex",
                        flexDirection: "column", 
                        justifyContent:"center", 
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        padding: 70,
                        gap: 15}}>
                <h2 >Our Mission</h2>
                <h3>To protect our forests and the animals that rely on it</h3>
                <h2 >From the trees to the small birds that live in its branches, each element of nature is 
                    a fundamental part of life. We strive to share our habitat and protect those who are not able to combat our 
                    industrial world</h2>
                <p>Want to be a part of the change?</p>
                <Button 
                    style={{scale:1.5, backgroundColor:"darkgreen"}} 
                    onClick={() => navigate("/donate")}>Donate</Button>
            </div>
        </div>

        <div>
            <h1 style={{color: "black", fontSize: 40, marginLeft: 40, marginRight: 40}}>
              In 2025, the concentration of carbon in the atmosphere was <strong style={{color:"chocolate"}}>430.2 </strong>parts per million</h1>
            <i style={{fontSize: 20}}>Conservation International</i>
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
                <h3>How does deforestation affect climate change?</h3>
                <h2 >As much as <strong style={{fontSize: 30, color:"chocolate"}}>20%</strong> of all global greenhouse gas emissions 
                  caused by humans are due to deforestation — exceeding the emissions 
                  from all the passenger vehicles on the planet.5 Deforestation is the 
                  second-leading cause of climate change (after fossil fuels).</h2>
                <p>Conservation International</p>
            </div>
            <div style={{display: "flex",
                        flexDirection: "column", 
                        justifyContent:"center", 
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        padding: 70,
                        gap: 15}}>
                <h3>How many people are considered “vulnerable” to climate change?</h3>
                <h2 >As many as <strong style={{fontSize: 30, color:"chocolate"}}>3.6 billion people</strong>
                 — 40 percent of the global population — 
                  live in areas of high vulnerability to climate change impacts such as droughts,
                   floods, heat waves, extreme weather events and sea-level rise.</h2>
                <p>Conservation International</p>
            </div>
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
                <h2 style={{color:"green"}}>Our Most Recent Panel</h2>
                <h3 style={{color:"darkgreen"}}>How to Compost for Beginners</h3>
                <p>Hosted by Alice Kohstam</p>
                <h2>Alice Kohstam gives an in depth beginners tutorial on how to compost for
                  those who have never done it before. She starts off with the importance of 
                  composting, why its good for our environment, how to compost, and how to 
                  continue to do so.
                </h2>
            </div>
            <img src={panel} style={{maxWidth: 600, height: 500, objectFit:"cover", margin:50}}/>
        </div>


        <section id="next-steps">
            <div id="docs">

                <h2>Connect with us</h2>
                <p>Join the Envo community</p>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">
                            <svg
                              className="button-icon"
                              role="presentation"
                              aria-hidden="true"
                            >
                            <img src={insta}/>
                            </svg>
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/" target="_blank">
                            <svg
                              className="button-icon"
                              role="presentation"
                              aria-hidden="true"
                            >
                            <use href="/icons.svg#x-icon"></use>
                            </svg>
                            X.com
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
}

export default EnvoHome;
