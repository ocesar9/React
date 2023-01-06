import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Fill a CEP!');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Fill a valid CEP!');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleblur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(validateCep(cep)){
      console.log('Enviou!')
    }else{
      console.log('Nao enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        value={cep}
        onBlur={handleblur}
        onChange={handleChange}
      />
      {cep}
      {error && <p>{error}</p>}
    </form>
  );
};

export default App;
