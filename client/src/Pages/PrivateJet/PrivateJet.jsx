import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import PrivateJetForm from './PrivateJetForm'

function PrivateJet() {
  return (
    <div>
        <Navbar/>
        <PrivateJetForm/>
        <Footer/>
    </div>
  )
}

export default PrivateJet