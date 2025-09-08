import React from 'react'
import { motion } from 'framer-motion'
import naneImage from '../assets/nane.jpg'
import './Services.css'

const Services = () => {
  const services = [
   
  ]

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

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
        </motion.div>

        <div className="services-content">
          <motion.div 
            className="services-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <img 
              src={naneImage} 
              alt="iBUA Hub Membership Community"
              loading="lazy"
            />
          </motion.div>

          <motion.div 
            className="services-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2 
              className="services-title"
              variants={itemVariants}
            >
              Empowering Innovators Through Membership
            </motion.h2>
            
            <motion.p 
              className="services-description"
              variants={itemVariants}
            >
             iBUA Hub Membership offers innovators, entrepreneurs,
              and changemakers access to a vibrant community where
              ideas are nurtured and transformed into impactful
              solutions. Through membership, individuals and organizations
              gain access to co-working spaces, mentorship, training programs,
              networking opportunities, and resources that support innovation
              and business growth. The membership is designed to foster collaboration, 
              knowledge sharing, and capacity building, enabling members to scale their ideas, 
              connect with key stakeholders, and contribute to building a stronger innovation 
              ecosystem in Zanzibar and beyond.
            </motion.p>

            <motion.div 
              className="services-list"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  className={`service-item ${service.isHighlighted ? 'highlighted' : ''}`}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  {index < services.length - 1 && <div className="service-divider"></div>}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
