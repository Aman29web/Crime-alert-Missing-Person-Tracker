import React from 'react'
import Navbar from '../../components/Navbar'
import MissingHero from './MissingHero'
import MissingCards from './MissingCards'
import MissingCTA from './MissingCTA'
import Footer from '../../components/Footer'

const MissingRouter = () => {
  return (
    <div>
        <Navbar></Navbar>
        <MissingHero></MissingHero>
        <MissingCards></MissingCards>
        <MissingCTA></MissingCTA>
        <Footer></Footer>
      
    </div>
  )
}

export default MissingRouter
