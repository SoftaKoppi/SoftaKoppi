import React from 'react'
import "./MainContent.css";
import logo from "../../images/softakoppi_light_logo_transparent.png"

export default function TopContent() {
  return (
    <div className="container">
    <div className="row" style={{ marginTop: "15px"}}>
      <div className="card-container d-flex flex-row">
        <div className="card-body-left text-center justify-content-center">
          <div className="card-header">
            <img src={logo} alt="softakoppi_light_logo_transparent" className="brand-logo"/>
            </div>
        </div>
         <div className="card-body-right justify-content-center">
          <div className="card-header">
            <p>Luovia Ratkaisuja Digitaaliseen Maailmaan</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}
