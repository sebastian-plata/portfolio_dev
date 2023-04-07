import { useState } from 'react'
import {Hero, Gallery, Skills, Career, Contact, Footer} from './container'
import {Navbar} from './components'
import './App.css'


const App = () => 
 
 (
    <div>
      <Navbar/>
      <Hero/>
      <Gallery/>
      <Skills/>
      <Career/>
      <Contact/>
      <Footer/>
    </div>
  )


export default App
