import React from 'react'
import { navLinks } from '../../constants/data'
import './Button.css'


const Button = ({title, id}) => (
    <ul>
      <li className='app__button'>
          <p className='app__button-link'>{title}</p>
        </li>
        </ul>
  
  )


export default Button
