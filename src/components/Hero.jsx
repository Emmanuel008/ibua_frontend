import React from 'react'
import { motion } from 'framer-motion'
import RotatingText from 'react-rotating-text'
import heroImage from '../assets/hero.jpg'
import './Hero.css'

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section 
      className="hero" 
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </motion.div>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <strong>
              <RotatingText 
                items={[
                  'Ibua Hub\'s dynamic initiative in Maruhubi, Zanzibar is fostering innovation and entrepreneurship',
                  'Building the future of digital innovation in East Africa',
                  'Empowering entrepreneurs through cutting-edge technology',
                  'Creating sustainable solutions for tomorrow\'s challenges',
                  'Transforming ideas into impactful digital experiences'
                ]}
                pause={3000}
                typingInterval={50}
                deletingInterval={30}
                emptyPause={1000}
                color="#00ff41"
              />
            </strong>
          </motion.p>
          <motion.div 
            className="brand-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <h1>iBUA Hub</h1>
          </motion.div>
          <motion.button 
            className="cta-button" 
            aria-label="Learn more"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
      <motion.button 
        className="scroll-to-top" 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </section>
  )
}

export default Hero
