import React from 'react'
import { USER_POST } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Error from '../interface-elements/Error';

const LoginCreate = () => {

  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const {userLogin} = React.useContext(UserContext);
  const {loading,error,request} = useFetch();

  async function handleSubmit(event){
    event.preventDefault();
    const {url,options} = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    })
    const {response} = await request(url,options);
    if(response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
          <Input label="Usuario" type="text" name="username" {...username}/>
          <Input label="Email" type="email" name="email" {...email}/>
          <Input label="Senha" type="password" name="password" {...password}/>
          {loading ? <Button disabled>Cadastrando...</Button> :  <Button>Cadastrar</Button>}
          <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate