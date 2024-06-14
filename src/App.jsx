import React from 'react';
import './App.css';

import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import { Home } from './Pages/LandingPage';
import { Packages } from './Pages/Packages';
import { Suspense } from 'react';


export default function App() {


  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
      </Routes>
    </Router>

  );
}




