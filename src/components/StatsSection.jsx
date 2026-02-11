import React from 'react'
import { motion } from 'framer-motion'
import '../styles/StatsSection.css'

const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="stats-section" id="about">
      <div className="stats-container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
        </motion.div>
        
        <motion.div 
          className="stats-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="stats-text" variants={itemVariants}>
            <motion.h2 
              className="stats-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              iBUA Innovation Hub
            </motion.h2>
            <motion.p 
              className="stats-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              iBUA Innovation Hub is a dynamic initiative in Maruhubi, Zanzibar, fostering innovation and entrepreneurship. It provides resources like mentorship, training, and funding to empower entrepreneurs. iBUA aims to strengthen Zanzibar's innovation ecosystem by creating a collaborative community across sectors. It bridges academia, industry, and government to drive economic growth and societal progress. iBUA is a catalyst for change, promoting creativity, entrepreneurship, and sustainable development in Zanzibar and beyond.
            </motion.p>
            <motion.button 
              className="who-we-are-btn"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Who we are
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="stat-item" variants={statVariants}>
              <motion.h3 
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                120+
              </motion.h3>
              <motion.p 
                className="stat-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
               <strong>Innovators and entrepreneurs supported</strong>
              </motion.p>
            </motion.div>
            <motion.div className="stat-item" variants={statVariants}>
              <motion.h3 
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
               100+
              </motion.h3>
              <motion.p 
                className="stat-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <strong>Funded startup</strong>
              </motion.p>
            </motion.div>
            <motion.div className="stat-item" variants={statVariants}>
              <motion.h3 
                className="stat-number"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                100+
              </motion.h3>
              <motion.p 
                className="stat-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <strong>Hub Manager Capacity Building</strong>
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
