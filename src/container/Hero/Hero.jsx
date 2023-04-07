import React from 'react'
import images from '../../constants/images'
import './Hero.css'

const Hero = () =>  (
    <section className='app__hero section__padding'>
      <div className='app__hero-img'>
        <img src={images.hero} alt="hello world" />
      </div>
      <div className='app__hero-info'>
        <h1 className='app__hero-info_head'></h1>
        <p className='app__hero-info_para'></p>
        <a className='app__hero-info_link' href=""></a>
      </div>
    </section>
  )


export default Hero
