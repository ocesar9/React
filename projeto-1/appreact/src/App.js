import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Produtos from './Components/Produtos'
import './App.css'
import Contato from './Components/Contato'
import Produto from './Components/Produto'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Produtos/>}/>
          <Route path='/produto/:id' element={<Produto/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App