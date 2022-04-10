import * as React from "react";
import { Link } from "gatsby";
import WithScrollbar from "../components/carousel";

const CarouselWrapper = ({projectPhotos}) => {

  return (
    <div className="carousel-wrapper-container">
      <WithScrollbar projectPhotos={projectPhotos} />
    </div>
  )
}

export default CarouselWrapper;