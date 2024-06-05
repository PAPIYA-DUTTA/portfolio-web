import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Skills from './components/Skills'
import SocialLink from './components/SocialLink'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero/>
      <SocialLink/>
      <About/>
      <Skills/>
      <Work/>
      <Experience/>
      <Contact/>
      
      </div>
    </>
  )
}

export default App