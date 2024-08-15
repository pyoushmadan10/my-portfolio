import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="skills" element={<Skills />}/>
      <Route path="projects" element={<Projects />}/>
      <Route path="contact" element={<Contact />}/>

      </Route>
    </Routes>
    </>
  )
}
