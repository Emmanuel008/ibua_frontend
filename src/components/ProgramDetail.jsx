import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import '../styles/ProgramDetail.css'

const ProgramDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === parseInt(id, 10))

  if (!project) {
    return (
      <div className="program-detail-page">
        <div className="program-detail-container">
          <p className="program-not-found">Program not found.</p>
          <button type="button" className="program-back-btn" onClick={() => navigate('/', { state: { scrollToPortfolio: true } })}>
            Back to Programs
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="program-detail-page">
      <motion.div
        className="program-detail-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          type="button"
          className="program-back-btn"
          onClick={() => navigate('/', { state: { scrollToPortfolio: true } })}
          aria-label="Back to programs"
        >
          ← Back to Programs
        </button>

        <div className="program-detail-content">
          <div className="program-detail-image-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="program-detail-image"
            />
          </div>
          <div className="program-detail-body">
            <h1 className="program-detail-title">{project.title}</h1>
            <p className="program-detail-description">{project.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProgramDetail
