import React from 'react'

const Modal = ({modal,setModal}) => {

  if(modal === true){
    return (
      <div>
      Esse e um modal 
      <button onClick={() => setModal(false)}>fechar</button>
    </div>
    )
  }
  return null;
}

export default Modal