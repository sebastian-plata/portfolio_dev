import React from 'react'
import './Button.css'
import { navLinks } from '../../constants/data';

const Button = ({title}) => (
    <ul>
      <li className='app__button'>
          <a href={`#${navLinks.id}`} className='app__button-link'>{title}</a>
        </li>
        </ul>
  
  )


export default Button
