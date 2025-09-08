import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import buniLogo from '../assets/buni logo.png'
import costechLogo from '../assets/COSTECH LOGO.png'
import planningLogo from '../assets/planning.png'
import './Partners.css'

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Buni",
      logo: buniLogo,
      type: "Innovation"
    },
    {
      id: 2,
      name: "COSTECH",
      logo: costechLogo,
      type: "Technology"
    },
    {
      id: 3,
      name: "Planning",
      logo: planningLogo,
      type: "Development"
    }
  ]

  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let currentIndex = 0
    const itemWidth = 200 // Partner item width + gap
    const totalItems = partners.length

    const autoScroll = () => {
      currentIndex = (currentIndex + 1) % totalItems
      const scrollPosition = currentIndex * itemWidth
      
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }

    const interval = setInterval(autoScroll, 2000)

    return () => clearInterval(interval)
  }, [partners.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="partners-section" id="partners">
      <div className="partners-container">
        <motion.div 
          className="partners-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="partners-title">Trusted partners</h2>
        </motion.div>

        <motion.div 
          className="partners-grid"
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="partner-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="partner-logo">
                <div className="logo-icon">
                  <img src={partner.logo} alt={partner.name} className="partner-logo-image" />
                </div>
                <div className="logo-text">
                  <div className="logo-name">{partner.name}</div>
                  <div className="logo-type">{partner.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
