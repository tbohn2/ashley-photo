import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutMe, Contact, Pricing, Portfolio } from './components/pages'
import Header from './components/elements/header';
import Footer from './components/elements/footer';
import Logo from './components/graphics/logo.png'
import './components/styles/root.css'

function App() {

  const [current, setCurrent] = useState('home');
  const [loaded, setLoaded] = useState({
    home: false,
    pricing: false,
    contact: true,
    aboutMe: false,
    portfolio: true
  })

  const updateLoaded = (page) => {
    let temp = { ...loaded }
    temp[page] = true
    setTimeout(() => {
      setLoaded(temp)
    }, 2000)
  }

  const updateCurrent = (page) => {
    setCurrent(page)
  }

  return (
    <Router>
      <div className='myBody overflow-hidden flex flex-col'>
        <Header />
        {loaded[current] ? null :
          <div className='loading-logo main-loading'>
            <img src={Logo} alt='logo' />
          </div>
        }
        <div className={`main-content ${loaded[current] ? 'loaded' : null}`}>
          <Routes>
            <Route exact path='/' element={<Home current={current} setCurrent={updateCurrent} setLoaded={updateLoaded} />} />
            <Route exact path='/pricing' element={<Pricing setCurrent={updateCurrent} setLoaded={updateLoaded} />} />
            <Route exact path='/contact' element={<Contact setCurrent={updateCurrent} setLoaded={updateLoaded} />} />
            <Route exact path='/aboutMe' element={<AboutMe setCurrent={updateCurrent} setLoaded={updateLoaded} />} />
            <Route exact path='/portfolio' element={<Portfolio setCurrent={updateCurrent} setLoaded={updateLoaded} />} />
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
