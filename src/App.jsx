import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './component/sidebar'
import HomePage from './component/homepage/homepage'
import User from './component/user/userManage'

function App() {

  return (
    <>
      <div className='flex page'>
        <Sidebar />
        <header className='title-header'>
          <h1>HomePage - Admin Dashbord</h1>
        </header>
        <div className='body'>
          <Routes>
            <Route path="/" Component={HomePage}/>
            <Route path="/user" Component={User}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
