import React, { useEffect, useState, useRef } from "react";
import "../stylesheets/projectTitles.scss";

const ProjectTitles = ({projectTitles, setProject}) => {

  const titlesList = projectTitles.map((title, index) => {
    return <div>
        <span 
          className="project-title"
          key={index}
          onClick={() => {
            setProject(title);
          }}
        >
          {title}
        </span>
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