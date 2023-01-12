import React from 'react'
import Exemplo from './Exemplo';

function reducer(state,action){
  console.log(state);
  console.log(action);

  // if(action === 'aumentar'){
  //   return state+1
  // }
  // if(action === 'dirminuir'){
  //   return state-1;
  // }

  switch (action) {
    case 'aumentar':
      return state+1;
    case 'dirminuir':
      return state-2;
    default: 
    throw new Error('Invalid action')
  }

}

const App = () => {

  const [state,dispatch] = React.useReducer(reducer,0);

  // function aumentar(){
  //   setContar(contar+1)
  // }
  
  // function dirminuir(){
  //   setContar(contar-1)
  // }

  return (
    <div>
      {/* <button onClick={aumentar}>+</button>
      <button onClick={dirminuir}>-</button> */}
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('dirminuir')}>-</button>
      <p>{state}</p>
      <Exemplo/>
    </div>
  )
}

export default App