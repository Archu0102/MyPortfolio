import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heroimage2 from '../component/Heroimage2';
import AboutContent from '../component/AboutContent';

const Aboutpage = () =>{
    return(
        <div>
           <Navbar/>
           <Heroimage2 heading="ABOUT" text="I'm Friendly Front-end developer" />
           <AboutContent/>
           <Footer/>
        </div>
    )
}

export default Aboutpage;