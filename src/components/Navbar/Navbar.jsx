import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Button from '../Button/Button';
import images from '../../constants/images'
import { navLinks } from '../../constants/data';

import './Navbar.css'

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.imjuan} alt="imjuan logo" />
      </div>
      <div className='app__navbar-links'>
         {navLinks.map((nav) => (
        <Button key={nav.title} title={nav.title}/>
        ))} 
      </div>
      <div className='app__navbar-blank'/>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
        color='#040404'
        fontSize={27}
        onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RxCross1
             color='#040404'
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
           {navLinks.map((nav) => (
        <Button key={nav.id} title={nav.title}/>
        ))}
          

          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
