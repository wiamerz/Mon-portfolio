import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import ProjectSection from './components/Projects'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <ProjectSection/>
    <Footer/>
    </>
  )
}

export default App