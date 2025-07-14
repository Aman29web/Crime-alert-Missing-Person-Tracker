import React from 'react'
import ReportHero from './ReportHero'
import ReportTypeSelector from './ReportTypeSelector'
import ReportSuccess from './ReportSuccess'
import ReportPage from './Report'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ReprtRouter = () => {
  return (
    <div>
        <Navbar></Navbar>
      <ReportHero></ReportHero>
      <ReportTypeSelector></ReportTypeSelector>
      <ReportSuccess></ReportSuccess>
      <ReportPage></ReportPage>
      <Footer></Footer>
    </div>
  )
}

export default ReprtRouter
