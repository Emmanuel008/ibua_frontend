import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import './App.css'

function HomePage() {
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
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App