import React from 'react'
import aboutkuva from "../../images/SoftaKoppiFirmanKuvaAbout.jpg";
import "./about.css";
import ContactForm from "../ContactForm/ContactForm.js"
import {Link } from "react-router-dom"

export default function AboutUs() {
  return (
    <div className="container" id="about-container">
      <div className="aboutContainer d-flex flex-row ">
      <div className="about_container_title">
        <p>Miksi SoftaKoppi?</p>
      </div>
        <div className="image-container">
          <img
            src={aboutkuva}
            alt="softakoppi_firman_edustus_kuva"
            width={450}
            className="about-picture"
          />
        <div className="about-card-body-bottom-left text-center justify-content-center">
          <div className="card-header" style={{ paddingTop: "50px"}}>
            <p>Terve, Minä oon Eetu</p>
          </div>
          <div className="text-area">
            <div className="service-list">
              <p className="area-item">
              Jos etsit luovaa ja energistä kehittäjää, joka ei pelkää tarttua haasteisiin, ota <Link to="#contact-form-id" style={{color: "#333"}}>rohkeasti yhteyttä!</Link>
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="about-card-body-right text-center justify-content-center">
          <div className="card-header">
            <p>Laatu ja innovaatio</p>
          </div>
          <div className="text-area">
            <div className="service-list">
              <p className="area-item">
                Olemme sitoutuneet tarjoamaan korkealaatuisia ja
                innovatiivisia ratkaisuja, jotka auttavat sinua erottumaan
                kilpailijoista.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-card-body-bottom text-center justify-content-center">
        <div className="card-header">
          <p>Asiakaskeskeisyys</p>
        </div>
        <div className="text-area">
          <div className="service-list">
            <p className="area-item">
              Ymmärrämme, että asiakkaiden tarpeiden ja tavoitteiden
              ymmärtäminen on avainasemassa onnistuneen lopputuloksen
              saavuttamiseksi.
            </p>
          </div>
        </div>
      </div>
      <div className="about-card-body-bottom-right text-center justify-content-center">
        <div className="card-header">
          <p>Nuori ja energinen</p>
        </div>
        <div className="text-area">
          <div className="service-list">
            <p className="area-item">
              Emme pelkää kokeilla uusia asioita ja löytää luovia ratkaisuja,
              jotka sopivat juuri sinun tarpeisiisi.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}
