import React from 'react'
import images from '../../constants/images'
import './Subtitle.css'

const Subtitle = ({title}) =>  (
    <div className='app__subtitle'>
      <div className='app__subtitle-img'>
        <img src={images.arrow} alt="arrow subtitle" />
      </div>
      <p className='app__subtitle-p'>{title}</p>
    </div>
  )


export default Subtitle
