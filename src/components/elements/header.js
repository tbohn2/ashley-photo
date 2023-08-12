import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'></div>
            <nav className='header__nav'>
                <Link to='/'>
                    <button className='btn btn-primary'>Home</button>
                </Link>
                <Link to='/pricing'>
                    <button className='btn btn-primary'>Home</button>
                </Link>
                <Link to='/aboutMe'>
                    <button className='btn btn-primary'>Home</button>
                </Link>
                <Link to='/contact'>
                    <button className='btn btn-primary'>Home</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;