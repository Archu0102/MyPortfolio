import "./WorkcardStyle.css"
import React from 'react'
import Dicegame from "../assets/dice game.png"
import { NavLink } from "react-router-dom"

const Workcard = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={Dicegame} alt="project-image"/>
          <h2 className="project-title">Dice Game</h2>
            <div className="pro-detail">
              <p>This is the dice-game which i made, here i used HTML and CSS.it's very easy and simple to play.You can play it with your friends and family members, this game realy amazing </p>
                <div className="pro-btn">
                  <NavLink to="url.com" className="btn">View</NavLink>
                  <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Workcard