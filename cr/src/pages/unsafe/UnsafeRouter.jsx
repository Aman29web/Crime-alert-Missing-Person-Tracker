import React from 'react'
import UnsafeHero from './UnsafeHero'
import UnsafeMap from './UnsafeMap'
import UnsafeCTA from './UnsafeCTA'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const UnsafeRouter = () => {
  return (
    <div>
        <Navbar></Navbar>
        <UnsafeHero></UnsafeHero>
        <UnsafeMap></UnsafeMap>
        <UnsafeCTA></UnsafeCTA>
        <Footer></Footer>
      
    </div>
  )
}

export default UnsafeRouter
