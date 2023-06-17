import React from 'react'
import "./Heroimagestyle.css"
import IntroImg from "../assets/laptop.jpg"
import { Link } from 'react-router-dom'

const Heroimage = () => {
  return (
    <div  className='hero'>
        <div  className='mask'>
            <img className='into-img' src={IntroImg} alt='coingpic'/>
        </div>
            <div className='content'>
                <p>Hi, I'm Archana</p>
                <h1>I'm a Front-end Developer</h1>
                <div>
                    <Link to='/project' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
    </div>
  )
}

export default Heroimage