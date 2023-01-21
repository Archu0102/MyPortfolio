import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heroimage2 from '../component/Heroimage2';

const Myproject = () => {
  return (
    <div>
       <Navbar/>
       <Heroimage2 heading="PROJECTS" text="Some of my most recent project"/>
       <Footer/>
    </div>
  )
}

export default Myproject;