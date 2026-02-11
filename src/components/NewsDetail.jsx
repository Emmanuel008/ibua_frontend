import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { newsItems } from '../data/news'
import '../styles/NewsDetail.css'

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = newsItems.find((n) => n.id === parseInt(id, 10))

  if (!item) {
    return (
      <div className="news-detail-page">
        <div className="news-detail-container">
          <p className="news-detail-not-found">News item not found.</p>
          <button type="button" className="news-detail-back-btn" onClick={() => navigate('/', { state: { scrollToNews: true } })}>
            Back to News
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="news-detail-page">
      <motion.div
        className="news-detail-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          type="button"
          className="news-detail-back-btn"
          onClick={() => navigate('/', { state: { scrollToNews: true } })}
          aria-label="Back to news"
        >
          ← Back to News
        </button>

        <article className="news-detail-content">
          <div className="news-detail-image-wrap">
            <img
              src={item.image}
              alt={item.title}
              className="news-detail-image"
            />
            <span className="news-detail-category">{item.category}</span>
          </div>
          <div className="news-detail-body">
            <h1 className="news-detail-title">{item.title}</h1>
            <p className="news-detail-description">{item.description}</p>
          </div>
        </article>
      </motion.div>
    </div>
  )
}

export default NewsDetail
