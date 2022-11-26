import React from 'react'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services';

function About() {
  const data = {
    name: "Ecommerce",
   }
  return (
    <>
      <HeroSection myData={data}/>
      <Services />
    </>
    
    
  )
}

export default About;