import { useState } from 'react'
import './css/index.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import TransferPage from './components/TransferPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path='/Transfer' element={<TransferPage sessionKey={null} sessionFiles={null}/>}/> 
      </Route>
    </Routes>
  )
}

export default App
