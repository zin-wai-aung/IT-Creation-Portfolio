import React from 'react'
import HeroSection from '../components/hero/HeroSection'
import About from './About.page'
import Service from './Service.page'
import ClientCarousel from '../components/clientlist/ClientCarousel'

const Home = () => {
  return (
      <>
      <HeroSection />  
      <About />
      <Service />
      <ClientCarousel/>
    </>
  )
}

export default Home