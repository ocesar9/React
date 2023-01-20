import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Button from '../forms/Button';
import Input from '../forms/Input';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();



  function handleSubmit(event) {
    event.preventDefault();
    if(username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
      .then((response) => {
        return response.json();
      })
      .then((json) => console.log(json));
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label='Usuario' type='text' name='username' {...username}/>
        <Input label='Senha' type='password' name='password' {...password}/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastrado</Link>
    </div>
  );
};

export default LoginForm;
