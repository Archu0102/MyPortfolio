import React from 'react'
import Navbar from '../component/Navbar';
import Heroimage from '../component/Heroimage';
import Footer from '../component/Footer';
import Work from '../component/Work'

const Homepage = () => {
  return (
    <>
        <Navbar/>
        <Heroimage/>
        <Work/>
        <Footer/>
    </>
  )
}

export default Homepage; 