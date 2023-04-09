import React from 'react'
import { Subtitle } from '../../components'
import './Contact.css'

const Contact = () => {
  return (
    <div className='app__contact' style={{ backgroundColor: "#f1f1e8" }}>
      <Subtitle title="come say hi"/>
      <div className='app__contact-container'>
        <div className='app__contact-container_email'>
          <p className='app__contact-container_email-title'>email</p>
          <p className='app__contact-container_email-para'>sebastian.platap@gmail.com</p>
        </div>
        <div className='app__contact-container-phone'>
          <p className='app__contact-container_phone-title'>phone</p>
          <p className='app__contact-container_phone-para'>+34 744 66 811</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
