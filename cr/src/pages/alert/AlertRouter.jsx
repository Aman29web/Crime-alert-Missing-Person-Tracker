import React from 'react'
import Navbar from '../../components/Navbar'
import AlertsHero from './AlertsHero.jsxAlertsHero'
import AlertFilter from './AlertFilter'
import Footer from '../../components/Footer'

const AlertRouter = () => {
  return (
    <div>
        <Navbar></Navbar>
        <AlertsHero></AlertsHero>
        <AlertFilter></AlertFilter>
        <Footer></Footer>
      
    </div>
  )
}

export default AlertRouter
