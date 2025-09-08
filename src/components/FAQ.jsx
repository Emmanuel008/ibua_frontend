import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(2) // Third question is open by default

  const faqs = [
    {
      id: 1,
      question: "How much does a research clearance application cost?",
      answer: "For the new research application, it costs US$ 50 for research application fee (non refundable) and US$ 300 per researcher. For the extension or renewal application, only research clearance permit of US$ 300 researcher in the project is applicable."
    },
    {
      id: 2,
      question: "What Is the difference between innovation and invention?",
      answer: "YES, these are two different concepts, though the two terms may sound alike. Common differences include: a. Invention is the occurrence of an idea for a product or process that has never been made before. While Innovation is the about practical implementation of the new idea for the very first time. b. The invention is related to the creation of new or novel product or process to the world. On the other hand, innovation means adding value or making a significant change or improvement in the existing product or process."
    },
    {
      id: 3,
      question: "What is invention?",
      answer: "An Invention means the creation of a brand-new product or device; creation of a product or introduction of a process for the first time."
    },
    {
      id: 4,
      question: "What is innovation?",
      answer: "An innovation is a new or improved product or process (or combination thereof) that differs significantly from the unit's previous products or processes and that has been made available to potential users (product) or brought into use by the unit (process)."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          
        </motion.div>

        <motion.div 
          className="faq-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-description">
          We understand that you may have questions about iBUA Hub, our programs, and how we support innovators and entrepreneurs. 
          To make things easier, we’ve compiled answers to some of the most common questions we receive.
          </p>
        </motion.div>

        <motion.div 
          className="faq-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="question-text">{faq.question}</span>
                <div className="faq-icon">
                  {openIndex === index ? (
                    <motion.div
                      className="icon-circle active"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="icon-circle"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {index < faqs.length - 1 && <div className="faq-divider"></div>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
