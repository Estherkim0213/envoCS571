import './App.css'
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router';

import EnvoAboutUs from './content/EnvoAboutUs';
import EnvoDonate from './content/EnvoDonate';
import EnvoHome from './content/EnvoHome';
import EnvoVolunteer from './content/EnvoVolunteer';
import EnvoLayout from './EnvoLayout'



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnvoLayout/>}>
          <Route index element={<EnvoHome />} />
          <Route path="/volunteer" element={<EnvoVolunteer />}></Route>
          <Route path="/donate" element={<EnvoDonate />}></Route>
          <Route path="/aboutus" element={<EnvoAboutUs />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
    </>
    
  )
}

export default App
