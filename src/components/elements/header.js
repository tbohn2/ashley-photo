import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/ashley_logo3.png'
import '../styles/header.css'

const Header = () => {


    return (
        <header className='d-flex flex-column align-items-center justify-content-center'>
            <div className='my-3 py-2 col-9 border-bottom border-dark d-flex flex-column align-items-center justify-content-center'>
                <h1 className='gloock myLgText m-0'>ASHLEY BOHN</h1>
                <h1 className='allura myPhotographyPos'>p h o t o g r a p h y</h1>
            </div>
            <nav className='d-flex justify-content-evenly align-items-end col-11 mt-1'>
                <Link className='myLink fs-3 text-dark' to='/'>
                    <button className='myBtn border border-dark fs-3'>
                        Home
                    </button>
                </Link>
                <Link className='myLink fs-3 text-dark' to='/aboutMe'>
                    <button className='myBtn fs-3'>
                        About Me
                    </button>
                </Link>
                <Link className='myLink fs-3 text-dark' to='/contact'>
                    <button className='myBtn fs-3'>
                        Contact
                    </button>
                </Link>
                <Link className='myLink fs-3 text-dark' to='/pricing'>
                    <button className='myBtn fs-3'>
                        Pricing
                    </button>
                </Link>
                <Link className='myLink fs-3 text-dark' to='/pricing'>
                    <button className='myBtn fs-3'>
                        Porfolio
                    </button>
                </Link>

            </nav>
        </header>
    )
};

export default Header;