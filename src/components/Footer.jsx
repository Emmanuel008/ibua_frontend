import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>iBUA.</h3>
          <p>Driving innovative solutions that empower entrepreneurs, transform ideas into impact, and accelerate growth.</p>
        </div>
        <div className="footer-section">
          <h4>Updates</h4>
          <ul>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Programs</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>Membership</a></li>
            <li><a href="#faq" onClick={() => scrollToSection('faq')}>FAQs</a></li>
            <li><a href="#news" onClick={() => scrollToSection('news')}>News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>ibua.innovation@gmail.com</p>
          <p>+255625313162</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} iBUA. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
