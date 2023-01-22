import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heroimage2 from '../component/Heroimage2';
import Work from '../component/Work';

const Myproject = () => {
  return (
    <div>
       <Navbar/>
       <Heroimage2 heading="PROJECTS" text="Some of my most recent project"/>
       <Work/>
       <Footer/>
    </div>
  )
}

export default Myproject;