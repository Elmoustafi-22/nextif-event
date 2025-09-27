import React from 'react'
import Header from './components/Header'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SpeakersPage from './pages/Speakers'
import PartnersPage from './pages/Partners'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/speakers' element={<SpeakersPage/>}/>
        <Route path='/partners' element={<PartnersPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
