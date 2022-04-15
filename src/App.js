import React from 'react';
import './App.css';
import {Navigate, Route, Routes } from 'react-router-dom';
import Home from './Mycomponants/Home';
import About from './Mycomponants/About';
import Contact from './Mycomponants/Contact';
import Service from './Mycomponants/Service';
import Navbar from './Mycomponants/Navbar';

const App = ()=> {

  return (
    <>
    <Navbar/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/Contact" element={<Contact/>}/>
       <Route exact path="/About" element={<About/>}/>
       <Route exact path="/Service" element={<Service/>}/>
       <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </>
  );
}

export default App;
