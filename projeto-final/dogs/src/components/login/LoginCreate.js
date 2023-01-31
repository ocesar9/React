import React from 'react'
import { USER_POST } from '../../api';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../forms/Button';
import Input from '../forms/Input';

const LoginCreate = () => {

  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const {userLogin} = React.useContext(UserContext);

  async function handleSubmit(event){
    event.preventDefault();
    const {url,options} = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    })
    const response = await fetch(url,options);
    if(response.ok) userLogin(username.value, password.value)
    console.log(response);

  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
          <Input label="Usuario" type="text" name="username" {...username}/>
          <Input label="Email" type="email" name="email" {...email}/>
          <Input label="Senha" type="password" name="password" {...password}/>
          <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default LoginCreate