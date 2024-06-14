import React from 'react';
import './App.css';

import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import { Home } from './Pages/LandingPage';
import { Packages } from './Pages/Packages';
import { Articles } from './Pages/Articles';
import { Article } from './Pages/Article';

export default function App() {


  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/articles' element={<Articles />} />
        <Route path="/articles/:articleId" element={<Article/>} />
      </Routes>
    </Router>

  );
}




