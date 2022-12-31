import React, {useState} from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';


const App = () => {
  // const [ativo,setAtivo] = React.useState(false);
  // const [dados,setDados] = React.useState({nome:'Julio',idade:23})
  // function handleClick(){
  //   setAtivo(!ativo)
  //   setDados({...dados,faculdade:"Possui Faculdade"})
  // }

  // const [modal,setModal] = React.useState(() => {
  //   const ativo = window.localStorage.getItem('ativo');
  //   return ativo;
  // });
  // const [items,setItems] = React.useState('Teste');
  // function handleClick(){
  //   setItems('Outros');
  // }


  // const [contar,setContar] = React.useState(1);
  // const [items,setItems] = React.useState(['Item 1'])
  // function handleClick(){
  //   setContar(contar + 1)
  //   setItems((items) => [...items,"Item" + (contar+1)])
  // }
  const [dados,setDados] = useState({});

 
  return (
  //  <div>
  //   <p>{dados.nome}</p>
  //   <p>{dados.idade}</p>
  //   <p>{dados.faculdade}</p>
  //   <button onClick={handleClick}>{ativo? 'Ativo' : 'Inativo'}</button>
  //  </div>

  // <div>
  //   <p>{items}</p>
  //   <button onClick={handleClick}>Clicar</button>
  //   <div>{modal ? 'Modal aberto' : 'Modal fechado'}</div>
  //   <Modal modal={modal} setModal={setModal}/>
  //   <ButtonModal setModal={setModal}/>
  // </div>

  // <div>
  //   {items.map(item => <li key={item}>{item}</li>)}
  //   <button onClick={handleClick}>{contar}</button>
  // </div>

  <div></div>
  );

};

export default App;
