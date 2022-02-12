import * as React from "react";
// import { Link } from "gatsby";
import "../stylesheets/carousel.scss";

const Carousel = ({projectPhotos}) => {

  const allPhotos = projectPhotos.map((photo, i) => {
    // console.log("projectPhotos", photo);
    return <img src={photo["src"]} height={400} width={400} alt="" key={i} id={i} />;
  });

  return (
    <div>
      <h1>This is carousel</h1>
      {allPhotos}
    </div>
  )
}

export default Carousel;