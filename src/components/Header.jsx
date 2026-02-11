import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
    setIsMenuOpen(false)
  }

  const handleContactClick = () => {
    setIsMenuOpen(false)
    // Contact will be handled by Link component
  }

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>iBUA.</h1>
        </motion.div>
        <motion.button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="hamburger"
            animate={{ 
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 0 : 0
            }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span 
            className="hamburger"
            animate={{ 
              opacity: isMenuOpen ? 0 : 1,
              x: isMenuOpen ? 20 : 0
            }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span 
            className="hamburger"
            animate={{ 
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? 0 : 0
            }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="nav nav-open"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.ul 
                className="nav-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                                       <motion.li
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3, delay: 0.2 }}
                       >
                         <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                       </motion.li>
                       <motion.li
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3, delay: 0.3 }}
                       >
                         <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Programs</a>
                       </motion.li>
                       <motion.li
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3, delay: 0.4 }}
                       >
                         <a href="#services" onClick={() => scrollToSection('services')}>Membership</a>
                       </motion.li>
                       <motion.li
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3, delay: 0.5 }}
                       >
                         <a href="#faq" onClick={() => scrollToSection('faq')}>FAQs</a>
                       </motion.li>
                       <motion.li
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3, delay: 0.6 }}
                       >
                         <a href="#news" onClick={() => scrollToSection('news')}>News</a>
                       </motion.li>
                       <motion.li
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3, delay: 0.7 }}
                       >
                         <Link to="/contact" onClick={handleContactClick}>Contact</Link>
                       </motion.li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className="nav desktop-nav">
          <ul className="nav-list">
                               <motion.li
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                   >
                     <Link to="/">Home</Link>
                   </motion.li>
                   <motion.li
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.5 }}
                   >
                     <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Programs</a>
                   </motion.li>
                   <motion.li
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.6 }}
                   >
                     <a href="#services" onClick={() => scrollToSection('services')}>Membership</a>
                   </motion.li>
                   <motion.li
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.7 }}
                   >
                     <a href="#faq" onClick={() => scrollToSection('faq')}>FAQs</a>
                   </motion.li>
                   <motion.li
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.8 }}
                   >
                     <a href="#news" onClick={() => scrollToSection('news')}>News</a>
                   </motion.li>
                   <motion.li
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.9 }}
                   >
                     <Link to="/contact">Contact</Link>
                   </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
