import React from 'react';

const titulo = <h1>Esse e um titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return 'Julio ' + sobrenome;
  }

  const carro = {
    marca: 'Ford',
    rodas: 4,
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = luana;
  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$', '')))
    .reduce((a, b) => a + b);
  console.log(total);

  return (
    // <a className="ativo" href='https://www.origamid.com' title='Isso e um site'>Origamid</a>
    // <>
    // <label htmlFor="nome">Nome</label>
    // <input type="text" id="nome" />
    // </>
    /* {titulo}
    <p>{true ? 'asdasd' : 'afgfgf'} - {10}</p>
    <p>{mostrarNome('Cesar')}</p>
    <p style={estiloP}>{new Date().getFullYear()}</p>
    <p>{carro.marca}</p>
    <p>{carro.rodas}</p>
    <p className={ativo ? 'ativo' : 'inativo'}>{random * 100} / 50</p> */

    <>
      <p>Nome {dados.cliente}</p>
      <p>Idade {dados.idade}</p>
      <p>
        Situacao:
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total: {total}</p>

      {total > 10000 && <p>'Voce esta gastando muito'</p>}
    </>
  );
};

export default App;
