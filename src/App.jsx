import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Navbar,Home, About, Contact, Services, Confirmation} from './components'


export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-20 px-4 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}
