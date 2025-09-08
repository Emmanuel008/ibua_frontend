import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import naneImage from '../assets/nane.jpg'
import sitaImage from '../assets/sita.jpg'
import tisaImage from '../assets/tisa.jpg'
import mojaImage from '../assets/moja.jpg'
import tatuImage from '../assets/tatu.jpg'
import './News.css'

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Stakeholder Engagement",
      description: "iBUA Hub connected with key partners and stakeholders to strengthen collaboration and drive impactful innovation initiatives.",
      image: naneImage,
      category: "Engagement",
      url: "#"
    },
    {
      id: 2,
      title: "Talent Pool Program",
      description: "The hub continued to nurture young innovators and entrepreneurs with creative ideas that can transform communities.",
      image: tatuImage,
      category: "Programs",
      url: "#"
    },
    {
      id: 3,
      title: "Training Management",
      description: "Tailored training sessions were conducted to equip participants with practical skills in innovation and entrepreneurship.",
      image: mojaImage,
      category: "Training",
      url: "#"
    },
    {
      id: 4,
      title: "Capacity Building Workshop",
      description: "iBUA facilitated a hands-on workshop to support institutions and individuals in building strong, sustainable innovation spaces.",
      image: tisaImage,
      category: "Workshops",
      url: "#"
    },
    {
      id: 5,
      title: "Community Event",
      description: "iBUA hosted an engaging community event, bringing together innovators, entrepreneurs, and changemakers to share knowledge, network, and celebrate creativity.",
      image: sitaImage,
      category: "Events",
      url: "#"
    },
  ]

  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let currentIndex = 0
    const cardWidth = 350 // Card width + gap
    const visibleCards = 3
    const totalCards = newsItems.length

    const autoScroll = () => {
      currentIndex = (currentIndex + 1) % totalCards
      const scrollPosition = currentIndex * cardWidth
      
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }

    const interval = setInterval(autoScroll, 2000)

    return () => clearInterval(interval)
  }, [newsItems.length])

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
    <section className="news-section" id="news">
      <div className="news-container">
        <motion.div 
          className="news-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
        </motion.div>

        <motion.div 
          className="news-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="news-title">Recent news</h2>
          <p className="news-description">
          Discover the latest innovations, groundbreaking projects, and visionary ideas from our hub shaping the future of entrepreneurship, technology, and impactful solutions.
          </p>
        </motion.div>

        <motion.div 
          className="news-grid"
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="news-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <div className="card-overlay">
                  <div className="card-category">{item.category}</div>
                  <div className="card-date">{item.date}</div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <a href={item.url} className="card-link" target="_blank" rel="noopener noreferrer">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default News
