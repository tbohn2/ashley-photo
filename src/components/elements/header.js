import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ?
                (
                    <header className='d-flex flex-column align-items-center pb-2 justify-content-center'>
                        <div className='my-3 py-2 col-10 border-bottom border-dark d-flex flex-column align-items-center justify-content-center'>
                            <h1 className='gloock myLgText m-0'>ASHLEY BOHN</h1>
                            <h1 className='allura myPhotographyPos'>p h o t o g r a p h y</h1>
                        </div>
                        <div className="btn-group position-absolute top-0 end-0">
                            <button type="button" className="mobileNavBtn fs-2 m-3" data-bs-toggle="dropdown" aria-expanded="false">
                                ☰
                            </button>
                            <ul className="dropdown-menu bgWhite col-12">
                                <li><Link className='noTextDec fs-3 dropdown-item border-top border-dark' to='/'>Home</Link></li>
                                <li><Link className='noTextDec fs-3 dropdown-item border-top border-dark' to='/aboutMe'>About</Link></li>
                                <li><Link className='noTextDec fs-3 dropdown-item border-top border-dark' to='/contact'>Contact</Link></li>
                                <li><Link className='noTextDec fs-3 dropdown-item border-top border-dark' to='/pricing'>Pricing</Link></li>
                                <li><Link className='noTextDec fs-3 dropdown-item border-top border-dark' to='/portfolio'>Porfolio</Link></li>
                            </ul>
                        </div>
                    </header>
                )
                :
                (
                    <header className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='my-2 col-9 border-bottom border-dark d-flex flex-column align-items-center justify-content-center'>
                            <h1 className='gloock myLgText m-0'>ASHLEY BOHN</h1>
                            <h1 className='allura myPhotographyPos'>p h o t o g r a p h y</h1>
                        </div>
                        <nav className='d-flex justify-content-evenly align-items-end col-10 mt-1'>
                            <Link className='noTextDec fs-3' to='/'>
                                <button className='myBtn'>
                                    Home
                                </button>
                            </Link>
                            <Link className='noTextDec fs-3' to='/aboutMe'>
                                <button className='myBtn'>
                                    About
                                </button>
                            </Link>
                            <Link className='noTextDec fs-3' to='/contact'>
                                <button className='myBtn'>
                                    Contact
                                </button>
                            </Link>
                            <Link className='noTextDec fs-3' to='/pricing'>
                                <button className='myBtn'>
                                    Pricing
                                </button>
                            </Link>
                            <Link className='noTextDec fs-3' to='/portfolio'>
                                <button className='myBtn'>
                                    Porfolio
                                </button>
                            </Link>

                        </nav>
                    </header>
                )
            }
        </div>
    )
};

export default Header;