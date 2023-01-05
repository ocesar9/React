import React from 'react'


const coresArray = ['azul','azul','roxo','laranja','verde','vermelho','cinza']

const App = () => {

  const [cores,setCores] = React.useState(['vermelho', 'azul']);

  function handleChange({target}){
    console.log(target);
    if(target.checked){
      setCores([...cores, target.value]);
    }else{
      setCores(cores.filter(cor => {
        console.log(cor);
        return cor !== target.value
      }))
    }
  }

  function checkColor(cor){
    return cores.includes(cor)
  }

  console.log(cores);

  return (
   <form>
    {coresArray.map((cor, index) => (
      <label key={index} style={{textTransform: 'capitalize'}}>
      <input type="checkbox" value={cor + index} checked={checkColor(cor + index)} onChange={handleChange}/>
        {cor}
      </label> 
      )
    )}
   </form>
  )
}

export default App