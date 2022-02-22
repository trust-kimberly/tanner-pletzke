import React, { useEffect, useState, useRef } from "react";
import "../../stylesheets/header.scss"

const Header = () => {

  return (
    <div className="header-container">
      <div className="header-column-1">
        <h2>Tanner Pletzke</h2>
      </div>
      <div className="header-column-2">
        <h2>About</h2>
        <h3>Tanner Pletzke is a freelance content producer looking for opportunities in New York City.</h3>
      </div>
      <div className="header-column-3">
        <h2>Contact</h2>
        <h3>tannerpletzke@gmail.com</h3>
        <h3>@tannerpletzke</h3>
      </div>      
    </div>
  )
}

export default Header;