import React from 'react'

import foto from './img/foto.jpg'
import {ReactComponent as Dog} from './img/dog.svg'

import './App.css'
import DogSvg from './DogSvg'

const App = () => {

    const [olho,setOlho] = React.useState(5);

    function handleClick(){
      for(let i=0; i<=5; i++){
        setTimeout(() =>{
          setOlho(i)
        },100*i)
      }
    }

  return (
    <div>
      <p className="fundo" onClick={handleClick}></p>
      <DogSvg color="#84e" olho={olho} />
      <Dog/>
      <img src={foto} alt="Cachorro"/>
    </div>
  )
}

export default App