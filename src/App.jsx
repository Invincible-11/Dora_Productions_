import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/home'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Portfolio from './pages/Portfolio/portfoilio'
import Services from './pages/Services/services'
import About from './pages/About/about'
import ScrollToTop from './components/ScrollToTop/scrolltotop'


function App() {

  return (
    <main>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </main>
  )
}

export default App
