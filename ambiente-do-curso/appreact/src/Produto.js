import React from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  // const dados = React.useContext(UserContext)
  // console.log(dados);

  // return (
  //   <div>{dados.nome}</div>
  // )

  const global = React.useContext(GlobalContext);

  function handleClick(){
    global.setContar((contar) => contar+1)
  }

  return (
    <div>
      Produto: {global.contar} {''}
      {/* <button onClick={handleClick}>Adicionar</button> */}
      <button onClick={() => global.adicionarDois()}>Adicionar</button>
    </div>
    )
}

export default Produto;