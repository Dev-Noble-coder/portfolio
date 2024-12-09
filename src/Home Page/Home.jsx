import React from 'react'
import Navbar from './Home Compnents/Navbar'
import HeroPG from './Home Compnents/HeroPG'
import About from './Home Compnents/About'
import Services from './Home Compnents/Services'
import Project from './Home Compnents/Project'
import Contact from './Home Compnents/Contact'
import Certificates from './Home Compnents/Certificates'
import Footer from './Home Compnents/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroPG />
      <About />
      <Services />
      <Project/>
      <Contact />
      <Certificates />
      <Footer />
    </div>
  )
}

export default Home
