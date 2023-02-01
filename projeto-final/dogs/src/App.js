import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/login/Login'
import {UserStorage} from './UserContext'
import User from './components/user/User'
import ProtectedRoute from './components/interface-elements/ProtectedRoute'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <UserStorage>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login/*' element={<Login/>}/>
            <Route path='/conta/*' element={<ProtectedRoute>
              <User/>
            </ProtectedRoute>}/>
          </Routes>
        <Footer/>
      </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App