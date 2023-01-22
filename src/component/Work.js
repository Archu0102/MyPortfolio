import './WorkcardStyle.css'

import React from 'react'
import Workcard from './Workcard'
import ProjectCardData from './WorkcardData'

export const Work = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((value,index) =>{
            return(
                <Workcard 
                key={index}
                imgsrc={value.imgsrc}
                title={value.title}
                text={value.text}
                view={value.view} />
            )
        })}
      </div>
    </div>
  )
}

export default Work
