import './App.css'
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router';

import EnvoAboutUs from './content/EnvoAboutUs';
import EnvoDonate from './content/EnvoDonate';
import EnvoHome from './content/EnvoHome';
import EnvoVolunteer from './content/EnvoVolunteer';
import EnvoLayout from './EnvoLayout'

import Volunteerinfo from './content/volunteer_page/Volunteerinfo';
import Guestspeaker from './content/volunteer_page/Guestspeaker';

import Aboutus from './content/about_page/Aboutus';
import Annualdata from './content/about_page/Annualdata';
import Sponsers from './content/about_page/Sponsers';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnvoLayout/>}>

          <Route index element={<EnvoHome />} />

          <Route path="/volunteer" element={<EnvoVolunteer />}></Route>
            <Route path="/volunteerinfo" element={<Volunteerinfo/>}></Route>
            <Route path="/guestspeaker" element={<Guestspeaker />}></Route>
\          
          <Route path="/donate" element={<EnvoDonate />}></Route>

          <Route path="/staff" element={<EnvoAboutUs />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/sponsors" element={<Sponsers />}></Route>
            <Route path="/annualdata" element={<Annualdata />}></Route>
          
        </Route>
      </Routes>

    </BrowserRouter>
    </>
    
  )
}

export default App
