import "./FormStyle.css"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

import React from 'react'

const Form = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5u9m46h', 'template_c75sd7o', e.target, 'qyvtpK90KoCFvbEXg')
      .then((result) => {
          alert("Thank you for contacting me ,I will get back to you soon...")
      }, (error) => {
          console.log(error.text);
      });
  // alert('hiiii')
  };
  return (
    // <div className="form" >
    //     <form onSubmit={sendEmail}>
    //         <label>Your Name</label>
    //         <input type="text"></input>
    //         <label>Email</label>
    //         <input type="email"></input>
    //         <label>Subject</label>
    //         <input type="text"></input>
    //         <label>Message</label>
    //         <textarea rows="5" placeholder="Type Your Massage here"/>
    //         <button className="btn">Submit</button>
    //     </form>
    // </div>
    <div className="form">
      <form   onSubmit={sendEmail}>
       <label>Your Name</label>
       <input type="text" name='name' placeholder='type your name' required/>
      
       <label>Email</label>
       <input type="email" name='email' placeholder='email' required />
      
       <label>Subject</label>
       <input type="text"  name='subject' placeholder='subject' required />
      
       <label>Message</label>
       <textarea rows='6'name='message' placeholder='type your message here' required />

       <button className='btn' type='submit' >Submit</button>
      
      
      </form>
    
    </div>
  )
}

export default Form