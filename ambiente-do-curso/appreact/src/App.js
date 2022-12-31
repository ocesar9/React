import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';


const App = () => {
  // const [ativo,setAtivo] = React.useState(false);
  // const [dados,setDados] = React.useState({nome:'Julio',idade:23})

  // function handleClick(){
  //   setAtivo(!ativo)
  //   setDados({...dados,faculdade:"Possui Faculdade"})

  // }

  const [modal,setModal] = React.useState(false);
 
  return (
  //  <div>
  //   <p>{dados.nome}</p>
  //   <p>{dados.idade}</p>
  //   <p>{dados.faculdade}</p>
  //   <button onClick={handleClick}>{ativo? 'Ativo' : 'Inativo'}</button>
  //  </div>
  <div>
    <div>{modal ? 'Modal aberto' : 'Modal fechado'}</div>
    <Modal modal={modal} setModal={setModal}/>
    <ButtonModal setModal={setModal}/>
  </div>
  );

};

export default App;
