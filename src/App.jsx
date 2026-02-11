import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import FAQ from './components/FAQ'
import News from './components/News'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Contact from './components/Contact'
import ProgramDetail from './components/ProgramDetail'
import NewsDetail from './components/NewsDetail'
import './App.css'

function HomePage() {
  const location = useLocation()
  useEffect(() => {
    if (location.state?.scrollToPortfolio) {
      const el = document.getElementById('portfolio')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
    if (location.state?.scrollToNews) {
      const el = document.getElementById('news')
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [location.state])
  return (
    <>
      <Hero />
      <StatsSection />
      <Portfolio />
      <Services />
      <FAQ />
      <News />
      <Partners />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/program/:id" element={<ProgramDetail />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App