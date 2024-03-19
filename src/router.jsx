import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CaravanComponent from './caravan';
import MotorComponent from './motor';
import TuningComponent from './tuning';
import UsedcarsComponent from './usedcars';
import CampingComponent from './camping';
import NavbarComponent from './navbar';

const RouterComponent = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
        <Route path='/caravan' element={<CaravanComponent/>}/>
        <Route path='/motor' element={<MotorComponent/>}/>
        <Route path='/tuning' element={<TuningComponent/>}/>
        <Route path='/usedcars' element={<UsedcarsComponent/>}/>
        <Route path='/camping' element={<CampingComponent/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent