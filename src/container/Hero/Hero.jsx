import React from 'react'
import images from '../../constants/images'
import './Hero.css'

const Hero = () =>  (
    <section className='app__hero'>
      <div className='app__hero-img'>
        <img src={images.heroArt} alt="hello world" />
      </div>
      <div className='app__hero-info'>
        <h1 className='app__hero-info_head'>i&apos;m juan,</h1>
        <p className='app__hero-info_para'>My goal is to create stuff that people find appealing but also easy to use. </p>
        <a className='app__hero-info_link' href="">hire me!</a>
      </div>
    </section>
  )


export default Hero
