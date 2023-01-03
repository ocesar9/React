import React from 'react'

const App = () => {
  // const [comentarios,setComentarios] = React.useState([]);
  // const [input,setInput] = React.useState('');
  // const inputElement =  React.useRef()

  // function handleClick(){
  //   setComentarios([...comentarios,input]);
  //   setInput('');
  //   inputElement.current.focus();
  // }

  const [carrinho,setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick(){
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho!");

    clearImmediate(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    },2000)
  }
  
  return (
    <div>
      {/* <ul>
        {comentarios.map((coment) => 
          <li key={coment}>{coment}</li>)}
      </ul>
      <input type="text" value={input} onChange={({target}) => setInput(target.value)} />
      <br />
      <button ref={inputElement} onClick={handleClick}>Enviar</button> */}
    <p>{notificacao}</p>
    <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>

    </div>
  )
}

export default App