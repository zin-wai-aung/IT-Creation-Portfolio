import React from 'react'
import NavbarComponent from '../components/navbar/NavbarComponent'
import HeroSection from '../components/hero/HeroSection'
import About from './About.page'
import Service from './Service.page'

const Home = () => {
  return (
      <>
      <HeroSection />  
      <About />
      <Service/>
    </>
  )
}

export default Home