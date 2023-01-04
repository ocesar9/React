import React from 'react'
import {GlobalStorage } from './GlobalContext';
import Limpar from './Limpar';
import Produto from './Produto';

const App = () => {
  return(
    <GlobalStorage>
        <Produto/> 
        <Limpar/>
    </GlobalStorage>
  )
}

export default App