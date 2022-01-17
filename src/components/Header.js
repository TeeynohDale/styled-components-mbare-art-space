import React, { useState } from 'react'
import {Headers,Navbar,} from './styled/Header.styled'
import { Link } from 'react-scroll'


const Header = () => {
    const [click, setClick]= useState(false);
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);
    return (
        
        <Headers>
                <Navbar>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className= {click? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    < ul className={click? 'nav-menu active' : 'nav-menu'}>
                         <li className="nav-item">
                              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                  Home
                              </Link>
                         </li>
                         <li className="nav-item">
                              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                  About
                              </Link>
                         </li>
                         <li className="nav-item">
                              <Link to="/art-lovers" className="nav-links" onClick={closeMobileMenu}>
                                Art-lovers
                              </Link>
                         </li>
                         <li className="nav-item">
                              <Link to="/partners" className="nav-links" onClick={closeMobileMenu}>
                                Our Partners
                              </Link>
                         </li>
                         <li className="nav-item">
                              <Link to="/our-space " className="nav-links" onClick={closeMobileMenu}>
                                Constructing the space
                              </Link>
                         </li>
                         <li className="nav-item">
                              <Link to="/museum" className="nav-links" onClick={closeMobileMenu}>
                                Childrens Museum
                              </Link>
                         </li>
                         <li className="nav-item">
                              <Link to="/social" className="nav-links" onClick={closeMobileMenu}>
                                    Social Media
                              </Link>
                         </li>
                         <li className="nav-item">
                              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                contact
                              </Link>
                         </li>
                         
                    </ul>
                    <div className="icons">
                         <Link to="/facebook.com">
                              <i className="fab fa-facebook"></i>
                         </Link>
                         <Link to="/twitter.com">
                              <i className="fab fa-twitter"></i>
                         </Link>
                         <Link to="/instagram.com">
                              <i className="fab fa-instagram"></i>
                         </Link>
                    </div>
                </Navbar>
        </Headers>
    )
}

export default Header
