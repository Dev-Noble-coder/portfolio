import React from 'react'
import Navbar from './Home Compnents/Navbar'
import HeroPG from './Home Compnents/HeroPG'
import About from './Home Compnents/About'
import Services from './Home Compnents/Services'
import Project from './Home Compnents/Project'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroPG />
      <About />
      <Services />
      <Project/>
    </div>
  )
}

export default Home
