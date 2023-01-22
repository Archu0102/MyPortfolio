import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Heroimage2 from '../component/Heroimage2';
import Form from '../component/Form';

const Mycontact = () => {
  return (
    <div>
         <Navbar/>
         <Heroimage2 heading="CONTACT" text="Let's have a chat" />
         <Form/>
         <Footer/>
    </div>
  )
}

export default Mycontact;