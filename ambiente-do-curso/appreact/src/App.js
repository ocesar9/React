import React from 'react';

const App = () => {

  const [form,setForm] = React.useState({
    nome:'',
    email: '',
  })
  // const [nome, setNome] = React.useState('');
  // const [email, setEmail] = React.useState('');

  function handleSubmit(event){
    console.log(event);
  }

  function handleChange({target}){
    const {id,value} = target;
    console.log(id,value);
    setForm({...form,[id]:value})

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id='nome'
        type="text"
        name='nome'
        value={form.nome}
        onChange={handleChange}
      />
      {form.nome}
      <br />
      <label htmlFor="email">Email</label>
      <input
        id='email'
        type="text"
        name='email'
        value={form.email}
        onChange={handleChange}
        />
        {form.email}
        <br />
      <button>Enviar</button>
    </form>
  );
};

export default App;
