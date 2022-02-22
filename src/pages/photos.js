import React, { useEffect, useState, useRef } from "react";
// import { graphql, Link } from "gatsby";
import Header from "../components/modules/header";
import Draggable from 'react-draggable'; 
import "../stylesheets/photos.scss";
import ProjectTitles from '../components/projectTitles'
import Carousel from "../components/carousel";
// folder 00004979
import img000049790001 from "../images/00004979/000049790001.jpg";
import img000049790002 from "../images/00004979/000049790002.jpg";
import img000049790003 from "../images/00004979/000049790003.jpg";
import img000049790004 from "../images/00004979/000049790004.jpg";
import img000049790005 from "../images/00004979/000049790005.jpg";
import img000049790006 from "../images/00004979/000049790006.jpg";
import img000049790007 from "../images/00004979/000049790007.jpg";
import img000049790008 from "../images/00004979/000049790008.jpg";
import img000049790009 from "../images/00004979/000049790009.jpg";
import img000049790010 from "../images/00004979/000049790010.jpg";
import img000049790011 from "../images/00004979/000049790011.jpg";
import img000049790012 from "../images/00004979/000049790012.jpg";
import img000049790013 from "../images/00004979/000049790013.jpg";
import img000049790014 from "../images/00004979/000049790014.jpg";
import img000049790015 from "../images/00004979/000049790015.jpg";
import img000049790016 from "../images/00004979/000049790016.jpg";
import img000049790017 from "../images/00004979/000049790017.jpg";
import img000049790018 from "../images/00004979/000049790018.jpg";
import img000049790019 from "../images/00004979/000049790019.jpg";
import img000049790020 from "../images/00004979/000049790020.jpg";
import img000049790021 from "../images/00004979/000049790021.jpg";
import img000049790022 from "../images/00004979/000049790022.jpg";
import img000049790023 from "../images/00004979/000049790023.jpg";
import img000049790024 from "../images/00004979/000049790024.jpg";
import img000049790025 from "../images/00004979/000049790025.jpg";
import img000049790026 from "../images/00004979/000049790026.jpg";
import img000049790027 from "../images/00004979/000049790027.jpg";
import img000049790028 from "../images/00004979/000049790028.jpg";
import img000049790029 from "../images/00004979/000049790029.jpg";
import img000049790030 from "../images/00004979/000049790030.jpg";
import img000049790031 from "../images/00004979/000049790031.jpg";
import img000049790032 from "../images/00004979/000049790032.jpg";
import img000049790033 from "../images/00004979/000049790033.jpg";
import img000049790034 from "../images/00004979/000049790034.jpg";
import img000049790035 from "../images/00004979/000049790035.jpg";
import img000049790036 from "../images/00004979/000049790036.jpg";
// folder 00005491
import img000054910001 from "../images/00005491/000054910001.jpg";
import img000054910002 from "../images/00005491/000054910002.jpg";
import img000054910003 from "../images/00005491/000054910003.jpg";
import img000054910004 from "../images/00005491/000054910004.jpg";
import img000054910005 from "../images/00005491/000054910005.jpg";
import img000054910006 from "../images/00005491/000054910006.jpg";
import img000054910007 from "../images/00005491/000054910007.jpg";
import img000054910008 from "../images/00005491/000054910008.jpg";
import img000054910009 from "../images/00005491/000054910009.jpg";
import img000054910010 from "../images/00005491/000054910010.jpg";
import img000054910011 from "../images/00005491/000054910011.jpg";
import img000054910012 from "../images/00005491/000054910012.jpg";
import img000054910013 from "../images/00005491/000054910013.jpg";
import img000054910014 from "../images/00005491/000054910014.jpg";
import img000054910015 from "../images/00005491/000054910015.jpg";
import img000054910016 from "../images/00005491/000054910016.jpg";
import img000054910017 from "../images/00005491/000054910017.jpg";
import img000054910018 from "../images/00005491/000054910018.jpg";
import img000054910019 from "../images/00005491/000054910019.jpg";
import img000054910020 from "../images/00005491/000054910020.jpg";
import img000054910021 from "../images/00005491/000054910021.jpg";
import img000054910022 from "../images/00005491/000054910022.jpg";
import img000054910023 from "../images/00005491/000054910023.jpg";
import img000054910024 from "../images/00005491/000054910024.jpg";
import img000054910025 from "../images/00005491/000054910025.jpg";
import img000054910026 from "../images/00005491/000054910026.jpg";
import img000054910027 from "../images/00005491/000054910027.jpg";
import img000054910028 from "../images/00005491/000054910028.jpg";
import img000054910029 from "../images/00005491/000054910029.jpg";
import img000054910030 from "../images/00005491/000054910030.jpg";
import img000054910031 from "../images/00005491/000054910031.jpg";
import img000054910032 from "../images/00005491/000054910032.jpg";
import img000054910033 from "../images/00005491/000054910033.jpg";
import img000054910034 from "../images/00005491/000054910034.jpg";



const PhotosLanding = () => {

  const photosData = [
    // folder 00004979
    {
      src: img000049790001,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790002,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790003,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790004,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790005,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790006,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790007,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790008,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790009,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790010,
      title: "Image title",
      project: "Series1"
    },
    {
      src: img000049790011,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790012,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790013,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790014,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790015,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790016,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790017,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790018,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790019,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790020,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790021,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790022,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790023,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790024,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790025,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790026,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790027,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790028,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790029,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790030,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790031,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790032,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790033,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790034,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790035,
      title: "Image title",
      project: "Series2"
    },
    {
      src: img000049790036,
      title: "Image title",
      project: "Series2"
    },
    // folder 00005491
    {
      src: img000054910001,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910002,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910003,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910004,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910005,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910006,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910007,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910008,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910009,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910010,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910011,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910012,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910013,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910014,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910015,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910016,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910017,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910018,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910019,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910020,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910021,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910022,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910023,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910024,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910025,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910026,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910027,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910028,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910029,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910030,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910031,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910032,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910033,
      title: "Image title",
      project: "Folder 00005491"
    },
    {
      src: img000054910034,
      title: "Image title",
      project: "Folder 00005491"
    }
  ]

  const [selectedProject, setProject] = useState("Series1");

  useEffect(() => {

    const imagesArr = document.getElementsByClassName("image-placement");

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i=0; i < imagesArr.length; i++) {

      const thisImage = imagesArr[i];

      const randomTop = getRandomNumber(0, windowHeight);
      const randomLeft = getRandomNumber(0, windowWidth);

      thisImage.style.top = randomTop + "px";
      thisImage.style.left = randomLeft + "px";
      thisImage.style.position = "absolute";
    }

  }, []);


  const nodeRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [grabbed, setGrabbed] = useState(false);
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleStart = () => {
    setGrabbed(true);
    console.log("starting drag");
  };
  const handleEnd = () => {
    setGrabbed(false);
    console.log("stopping drag");
  };


  const allPhotos = photosData.map((photo, i) => {
    return <Draggable
      nodeRef={nodeRef}
      onDrag={(e, data) => trackPos(data)}
      onStart={handleStart}
      onStop={handleEnd}
    >
      <div 
        ref={nodeRef} 
        className="draggable"
      >
        <img 
          src={photo["src"]} 
          draggable="false"
          className="image-placement" 
          width="auto" 
          height={200} 
          key={i} 
          id={i} 
          style={{ cursor: grabbed ? "grabbing" : "grab" }}
        />
      </div>
    </Draggable>
  });

  const projectTitles = photosData.map(item => item.project).filter((value, index, self) => self.indexOf(value) === index);
  console.log(projectTitles);

  const projectPhotos = photosData.filter((photo) => {
    if (photo["project"] === selectedProject) {
      return photo;
    }
  });

  return (
    <div>
      <div className="photos-landing-container">
        <Header />
        <div className="photos-project-list">
          <ProjectTitles projectTitles={projectTitles} setProject={setProject} />
        </div>
        {allPhotos}
      </div>
      <div className="photos-project-container">
        <Carousel projectPhotos={projectPhotos} />
      </div>
    </div>
  )
}

export default PhotosLanding;
