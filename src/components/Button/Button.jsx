import React from 'react'
import { navLinks } from '../../constants/data'
import './Button.css'


const Button = ({title, id}) => (
    <ul>
      <li className='app__button'>
          <a href={`${navLinks.href}`} className='app__button-link'>{title}</a>
        </li>
        </ul>
  
  )


export default Button
