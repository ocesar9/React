import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  // const produtos = ['Notebook', 'Tablet', 'Smartphone']
  // const produtos = [<li key="e1">Notebook</li>,<li key="e1">Smartphone</li>]
  // return <div>{produtos}</div>

  // const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
  // return <ul>{filmes.map((filme) =>( <li key={filme}>{filme}</li>))}</ul>

  // const livros = [
  //   { nome: 'A Game of Thrones', ano: 1996 },
  //   { nome: 'A Clash of Kings', ano: 1998 },
  //   { nome: 'A Storm of Swords', ano: 2000 },
  // ];

  // return <ul>{livros.map(({nome,ano})=>( <li key={nome}>{nome}, {ano}</li>))}</ul>
  // return (
  //   <ul>
  //     {livros
  //       .filter(({ ano }) => ano >= 1998)
  //       .map(({ nome, ano }) => (
  //         <li key={nome}>
  //           {nome}, {ano}
  //         </li>
  //       ))}
  //   </ul>
  // );

  const dados = produtos.filter(({preco}) => Number(preco.replace("R$","")))

  return <section>
    {dados.map(({id,nome,preco,cores}) => <div key={id}>
      <h1>{nome}</h1>
      <p>{preco}</p>
      <ul>
        {cores.map((cor)=> <li style={{backgroundColor:cor,color:'white'}}key={cor}>{cor}</li>)}
      </ul>
    </div>)}
  </section>
};

export default App;
