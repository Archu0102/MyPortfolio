import './AboutContentStyle.css'
import React from 'react'
import { Link } from 'react-router-dom'
import ReactImg from '../assets/react3.png'
import CssImg from '../assets/css3.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>I'm Archana Kumari</h1>
            <p>I'm react front-end developer. i have create responsive websites</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={ReactImg} alt="React image"/>
                </div>
                <div className='img-stack top'>
                    <img src={CssImg} alt="CSS image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent