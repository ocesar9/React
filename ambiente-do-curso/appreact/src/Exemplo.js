import React from 'react'

function reducer(state,action){
  switch(action.type){
    case 'remover':
      return state.filter(item => item !== action.content);
    case 'adicionar':
      return [...state, action.content];
    default:
      throw new Error('Invalid action');
  }
}

const Exemplo = () => {
  const [state,dispatch] = React.useReducer(reducer, ['Banana', 'uva']);

  return (
    <div>
      <button onClick={() => dispatch({type:'remover',content:'Banana'})}>Remover Banana</button>
      <button onClick={() => dispatch({type:'adicionar',content:'Limao'})}>Adicionar Limao</button>
      {state}
    </div>
  )
}

export default Exemplo