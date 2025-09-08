import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import sitaImage from '../assets/sita.jpg'
import sabaImage from '../assets/saba.jpg'
import nneImage from '../assets/moja.jpg'
import mojaImage from '../assets/nne.jpeg'
import './Portfolio.css'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const scrollContainerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Capacity Building for New Innovation Spaces",
      image: sitaImage,
      tags: ["Innovation", "Capacity Building"],
      description: "Capacity Building for New Innovation Spaces – Helps institutions establish innovation spaces using best practices."
    },
    {
      id: 2,
      title: "Mentorship for Existing Innovation Spaces",
      image: sabaImage,
      tags: ["Mentorship", "Support"],
      description: "Mentorship for Existing Innovation Spaces – Provides tailored mentorship to strengthen already established hubs."
    },
    {
      id: 3,
      title: "iBUA Talent Pool Program",
      image: nneImage,
      tags: ["Talent Development", "Growth"],
      description: "iBUA Talent Pool Program – Nurtures innovative talents with impactful ideas and connects them with companies to accelerate growth."
    },
    {
      id: 4,
      title: "Linkages and Networking",
      image: mojaImage,
      tags: ["Networking", "Partnerships"],
      description: "Linkages and Networking – Connects beneficiaries with stakeholders and government at local and international levels for partnerships and opportunities."
    }
  ]

  const handleCardClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const scrollToNext = () => {
      const cardWidth = 320 + 30 // card width + gap
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
      
      if (scrollContainer.scrollLeft >= maxScroll) {
        // Reset to beginning
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' })
        setCurrentIndex(0)
      } else {
        // Scroll to next card
        const nextScroll = scrollContainer.scrollLeft + cardWidth
        scrollContainer.scrollTo({ left: nextScroll, behavior: 'smooth' })
        setCurrentIndex(prev => (prev + 1) % projects.length)
      }
    }

    const interval = setInterval(scrollToNext, 2000) // Auto-scroll every 2 seconds

    return () => clearInterval(interval)
  }, [projects.length])

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
        </motion.div>

        <motion.div 
          className="portfolio-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="portfolio-title">Our Programs</h2>
          <p className="portfolio-description">
            Discover iBUA Innovation Hub's comprehensive programs designed to foster innovation, support entrepreneurs, and strengthen Zanzibar's innovation ecosystem.
          </p>
        </motion.div>

        <motion.div 
          ref={scrollContainerRef}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(project)}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <motion.button
                    className="view-project-btn"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    View Project
                  </motion.button>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex}
                      className="project-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleCloseModal}
          >
            <motion.div
              className="project-modal-content"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={handleCloseModal}>
                ×
              </button>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="modal-image" 
              />
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
