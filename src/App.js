import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/elements/header';
import './components/styles/root.css'

function App() {
  return (
    <Router>
      <div className='bg-dark myBody flex flex-col'>
        <Header />

        {/* <div className=''>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pricing' element={<Pricing />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/aboutMe/' element={<AboutMe />} />
        </Routes>
        </div>
        <div>
        <Footer />
      </div> */}
      </div>
    </Router>
  );
}

export default App;
