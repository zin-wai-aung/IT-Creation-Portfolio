import React from 'react'
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