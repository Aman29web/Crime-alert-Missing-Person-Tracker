import React from 'react'
import Hero from './Hero'
import Navbar from '../../components/Navbar'
import HowItWorks from './HowItWorks'
import WhyChooseUs from './WhyChooseUs'
import LiveAlertMap from './LiveAlertMap'
import CallToAction from './CallToAction'
import Footer from '../../components/Footer'

const HomeRouter = () => {
  return (
    <div>
        <Navbar></Navbar>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <LiveAlertMap></LiveAlertMap>
      {/* <LiveAlertMap></LiveAlertMap> */}
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  )
}

export default HomeRouter
