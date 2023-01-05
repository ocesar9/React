import React from 'react';

const App = () => {

  const [produto,setProduto] = React.useState('');
  const [cor,setCor] = React.useState('');

  function handleChange({target}){
    setProduto(target.value)
  }

  return (
    <form>
      <h2>Produtos</h2>
      <label htmlFor="">
        <input type="radio" name="produto" value="smartphone" onChange={handleChange} checked={produto === "smartphone"}/>
        Smartphone
      </label>
      <label htmlFor="">
        <input type="radio" name="produto" value="notebook" onChange={handleChange} checked={produto === "notebook"}/>
        Notebook
      </label>
      {produto}
      
      <h2>Cores</h2>
      <label htmlFor="">
        <input type="radio" name="cor" value="azul" onChange={({target}) => setCor(target.value)} checked={cor === "azul"}/>
        Azul
      </label>
      <label htmlFor="">
        <input type="radio" name="cor" value="vermelho" onChange={({target}) => setCor(target.value)} checked={cor === "vermelho"}/>
        Vermelho
      </label>
      {cor}
    </form>
  );
};

export default App;
