import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import ProjectSection from './components/Projects'
import WhatIdo from './components/WhatIdo'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <ProjectSection/>
    <WhatIdo/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App