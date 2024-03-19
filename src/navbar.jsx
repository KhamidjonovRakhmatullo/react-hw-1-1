import React from 'react'
import {Link} from "react-router-dom";


const NavbarComponent = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px 30px",
        backgroundColor: "GrayText"
    }}> 
    <Link to="/caravan">
        <p style={{cursor: "pointer", color: "white"}}>Caravan</p>
    </Link>
    <Link to="/tuning">
        <p style={{cursor: "pointer", color: "white"}}>Tuning</p>
    </Link>
    <Link to="/motor">
        <p style={{cursor: "pointer", color: "white"}}>Motor</p>
    </Link>
    <Link to="/usedcars">
        <p style={{cursor: "pointer", color: "white"}}>Used-Cars</p>
    </Link>
    <Link to="/camping">
        <p style={{cursor: "pointer", color: "white"}}>Camping</p>
    </Link>
    </div>
  )
}

export default NavbarComponent