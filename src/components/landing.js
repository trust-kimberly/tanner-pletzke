import * as React from "react";
import "../stylesheets/landing.scss";
import reel from "../content/films/reel.mp4";
import img000049790001 from "../images/00004979/000049790001.jpg";
import { Link } from "gatsby";

const Landing = () => {

  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-content-copy">
          <h1>Tanner Pletzke</h1>
        </div>
        <div className="landing-content-columns">
          <div className="landing-content-columns-1">
            <Link to="/photos/">
              <img src={img000049790001} />
            </Link>
          </div>
          <div className="landing-content-columns-2">
            <Link to="/films/">
              <video src={reel} autoPlay muted loop />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landing
