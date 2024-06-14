import React from 'react';
import './App.css';

import { HashRouter as Router, Routes, Route} from 'react-router-dom';

const Home = lazy(() => import('./Pages/LandingPage'));
const Packages = lazy(() => import('./Pages/Packages'));
import { Suspense } from 'react';

const Loader = () => console.log("preloading"); // Replace this with your actual preloader

export default function App() {


  return (

    <Router>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/packages' element={Packages} />
      </Routes>
      </Suspense>
    </Router>

  );
}




