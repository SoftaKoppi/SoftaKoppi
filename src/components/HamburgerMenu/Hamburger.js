import React, { useState } from 'react'
import './hamburger.css'

export default function Hamburger() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger b1"  />
        <div className="burger b2"  />
        <div className="burger b3"  />
    </div>
  )

  
}
