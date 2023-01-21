import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heroimage2 from '../component/Heroimage2';
import Workcard from '../component/Workcard';

const Myproject = () => {
  return (
    <div>
       <Navbar/>
       <Heroimage2 heading="PROJECTS" text="Some of my most recent project"/>
       <Workcard/>
       <Footer/>
    </div>
  )
}

export default Myproject;