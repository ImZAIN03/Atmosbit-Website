import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Services from '../components/Services'
import ServiceImages from '../components/ServiceImages'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Info/>
      <Services/>
      <ServiceImages/>
    </div>
  )
}

export default HomePage