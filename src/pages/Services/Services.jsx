import React from 'react'
import './services.css'

export default function Services() {
  return (
    <div className="container">
    <div className="company-section d-flex flex-row">
      <div className="company-card-body-left text-center justify-content-center col-md-3">
        <div className="card-header">
          <p>Verkkosivut</p>
          </div>
          <div className="text-area">
          <div className="service-list">
                  <p className="area-item">Luomme upean ja toimivan verkkosivuston,
                  joka heijastaa brändisi identiteettiä ja parantaa asiakaskokemusta.</p>
              </div>
          </div>
      </div>
      <div className="company-card-body-center text-center justify-content-center col-md-3">
        <div className="card-header">
          <p>Verkkokaupat</p>
          </div>
          <div className="text-area">
              <div className="service-list">
                <p className="area-item">Autamme sinua rakentamaan verkkokaupan, joka on helppokäyttöinen ja tehokas myyntikanava.</p>
              </div>
          </div>
      </div>
      <div className="company-card-body-right text-center justify-content-center col-md-3">
        <div className="card-header">
          <p>Ylläpito</p>
          </div>
          <div className="text-area">
              <div className="service-list">
                <p className="area-item">Tarjoamme luotettavaa ja kattavaa ylläpitopalvelua varmistaaksemme verkkosivujen ja verkkokauppojen jatkuvan toimivuuden ja turvallisuuden.</p>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}
