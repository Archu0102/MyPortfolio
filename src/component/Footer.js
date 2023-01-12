import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={25} style={{ color:'#fff', marginRight: "2rem" }} />
                    <div>
                        <p>Motihari  Bihar</p>
                    </div>
                </div>
                <div className='phone'>
                       <h4>
                         <FaPhone size={20} style={{ color:'#fff', marginRight: "2rem" }} />
                         +91-8837885044
                        </h4>
                </div>
                <div className='phone'>
                       <h4>
                         <FaMailBulk size={20} style={{ color:'#fff', marginRight: "2rem" }} />
                         archush0102@gmail.com
                        </h4>
                </div>
            </div>
                <div className='right'>
                    <h4>About Me</h4>
                    <p>Hi, I'm Archana Kumari, I'm MERN Stack Developer. I have completed 6 month internship from Intric pvt. Ltd. Noida UP , here i workes as web Debdeveloper and also as a manual test engineer i interact with real world and live project </p>
                    <div className='social'>
                    <FaFacebook size={25} style={{ color:'#fff', marginRight: "2rem" }} />
                    <FaLinkedin size={25} style={{ color:'#fff', marginRight: "2rem" }} />
                    <FaInstagram size={25} style={{ color:'#fff', marginRight: "2rem" }} />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer