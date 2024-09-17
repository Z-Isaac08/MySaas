import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy loading of components
const NavBar = lazy(() => import('./components/NavBar/NavBar'));
const Home = lazy(() => import('./components/Home/Home'));
const Register = lazy(() => import('./components/Register/Register'));
const Login = lazy(() => import('./components/Login/Login'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const About = lazy(() => import('./components/About/About'));

const App = () => {
  return (
    <Router>
      <>
        {/* Suspense wrapper for NavBar */}
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
        </Suspense>
        
        {/* Suspense wrapper for Routes */}
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </>
    </Router>
  );
}

export default App;
