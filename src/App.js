import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className=''>
        <div className=''>
          <Header />
        </div>
        <div className=''>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/aboutMe/' element={<AboutMe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
