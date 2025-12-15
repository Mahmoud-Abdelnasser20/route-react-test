import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
function App() {


  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>

      </main>

      <Footer />
    </div>
  )
}

export default App
