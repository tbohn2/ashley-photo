import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutMe, Contact, Pricing, Portfolio } from './components/pages'
import Header from './components/elements/header';
import Footer from './components/elements/footer';
import './components/styles/root.css'

function App() {
  return (
    <Router basename='/ashley-photo'>
      <div className='myBody overflow-hidden flex flex-col'>
        <Header />
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/aboutMe/' element={<AboutMe />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
