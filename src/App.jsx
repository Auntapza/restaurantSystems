import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './component/sidebar'
import HomePage from './component/homepage/homepage'

function App() {
  return (
    <>
      <div className='flex page'>
        <Sidebar />
        <header>
          <h1>test</h1>
        </header>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/foodSummery" Component={'foodSummery'}/>
        </Routes>
      </div>
    </>
  )
}

export default App
