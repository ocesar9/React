import React from 'react'


const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep Invalid'
  },
  email: {
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: 'Email Invalid'
  }
}

const useForm = (type) => {
  const [value,setValue] = React.useState('')
  const [error,setError] = React.useState(null);

  function validate(value){
    if(value === false) return true;
    if (value.length === 0) {
      setError(`The ${type} need be filled!`);
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
}

export default useForm