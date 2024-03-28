import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Import your CSS file for styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      setIsScrollingDown(true);
    } else {
      setIsVisible(false);
      setIsScrollingDown(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isScrollingDown ? 'scrolling-down' : ''}`}>
      {isVisible && 
        <div onClick={scrollToTop} className="scroll-to-top-button">
          <i className="bi bi-arrow-up-circle"></i>
        </div>
      }
    </div>
  );
};

export default ScrollToTop;
