import React, { memo, useEffect } from "react"
import { useState } from 'react'
import planthand from '../assets/planthand.jpg'
import '../App.css'

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router';


function EnvoHome () {
    return <>
        <h1>Welcome to Envo!</h1>
        <p>Heres some information about us!</p>

              <section id="center">
        <div className="hero">
          <img src={planthand} className="base" alt="" />
        </div>
        <div>
          <h1>Welcome to Envo</h1>
          <h2>
            Help our mission to save our planet!
          </h2>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">


          <h2>Connect with us</h2>
          <p>Join the Envo community</p>
          <ul>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
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

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
}

export default EnvoHome;
