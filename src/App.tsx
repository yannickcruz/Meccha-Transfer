import { useState } from 'react'
import './css/index.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LandingPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
