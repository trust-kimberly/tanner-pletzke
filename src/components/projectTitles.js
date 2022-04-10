import React, { useEffect, useState, useRef } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ProjectTitles = ({projectTitles, setProject}) => {

  const titlesList = projectTitles.map((title, index) => {
    return <div>
      <AnchorLink           
        key={index}
        to="#carousel"
        onClick={() => {
          setProject(title);
        }}
      >
        <span 
          className="project-title"
        >
          {title}
        </span>
      </AnchorLink>
      <br/>
    </div>
  })
  return (
    <div>
      <ul className="project-title">
        {titlesList}
      </ul>
    </div>
  )
}

export default ProjectTitles;