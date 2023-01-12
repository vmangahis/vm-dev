import React, {useState}from 'react';
import Hamburger from './Hamburger';
import MobileNav from './MobileNav';


const Header = () => {
    const [hamburger, toggleHamburger]  = useState(false);


  return (
    <header className="header">
        <h1 className="logo"><a href="#home">VM</a></h1>
    <MobileNav hamburger_state={hamburger} />
       <Hamburger toggle={toggleHamburger} hamburger_state={hamburger}/>
       
        <nav className="navbar">
            <ul>
            <li>
                <a href="#hero-section">
                Home
                </a>
            </li>

            <li>
                <a href="#about">
                About
                </a>
            </li>

            <li>
                <a href="#experience">
                Experience
                </a>
            </li>

            <li>
             <a href="#projects">
                Projects
                </a>
            </li>

            <li>
                <a href="#skills">
                Skills
                </a>
            </li>

            <li>
                <a href="#contact">
                Contact
                </a>
            </li>
            </ul>
        </nav>


      

    </header>
  )
}

export default Header;