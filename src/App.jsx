import React from 'react'
import Header from './components/Header'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SpeakersPage from './pages/Speakers'
import ContactPage from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/speakers' element={<SpeakersPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
