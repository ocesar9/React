import React from 'react';


const titulo = <h1>Esse e um titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return 'Julio ' + sobrenome;
  }

  const carro ={
    marca: "Ford",
    rodas: 4
  }

  const estiloP = {
    color: "blue",
    fontSize: '2rem'
  }


  return (
    // <a className="ativo" href='https://www.origamid.com' title='Isso e um site'>Origamid</a>
    // <>
    // <label htmlFor="nome">Nome</label>
    // <input type="text" id="nome" />
    // </>
    <>
    {titulo}
    <p>{true ? 'asdasd' : 'afgfgf'} - {10}</p>
    <p>{mostrarNome('Cesar')}</p>
    <p style={estiloP}>{new Date().getFullYear()}</p>
    <p>{carro.marca}</p>
    <p>{carro.rodas}</p>
    <p className={ativo ? 'ativo' : 'inativo'}>{random * 100} / 50</p>
    </>
  );
}

export default App;
