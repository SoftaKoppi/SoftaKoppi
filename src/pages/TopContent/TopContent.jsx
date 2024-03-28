import React, { useState } from 'react'
import "./MainContent.css";
import logo from "../../images/softakoppi_light_logo_transparent.png"
import Hamburger from '../../components/Hamburger.js';
import{Link} from 'react-router-dom'

export default function TopContent() {
  const [HamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
      setHamburgerOpen(!HamburgerOpen);
    }

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
            <div className='hamburger' onClick={toggleHamburger}>
         <Hamburger />
      <div className={`navigation ${HamburgerOpen ? 'navigation-visible' : 'navigation-hidden'}`}>
        <ul>
          <li className="list-link-nav">
          <Link className="link" to="#service-container">Palvelut</Link>
          </li>
          <li className="list-link-nav">
           <Link className="link" to="#about-container">Meistä</Link> 
          </li>
          <li className="list-link-nav">
           <Link className="link" to="#contact-container">Yhteystiedot</Link> 
          </li>
        </ul>
      </div>
      </div>
        </div>
      </div>
    </div>
  )
}
