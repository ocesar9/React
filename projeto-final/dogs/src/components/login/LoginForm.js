import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../forms/Button';
import Input from '../forms/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => console.log(json));
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label='Usuario' type='text' name='username'/>
        <Input label='Senha' type='password' name='password'/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastrado</Link>
    </div>
  );
};

export default LoginForm;
