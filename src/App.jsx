import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './component/sidebar'

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" Component={'HomePage'}/>
        <Route path="/foodSummery" Component={'foodSummery'}/>
      </Routes>
    </>
  )
}

export default App
