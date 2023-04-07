import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from '../../constants/images'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.imjuan} alt="imjuan logo" />
      </div>
      <ul className='app__navbar-links'>
        

      </ul>
      
    </nav>
  )
}

export default Navbar
