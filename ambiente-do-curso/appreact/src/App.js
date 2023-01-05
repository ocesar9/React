import React from 'react'

const App = () => {
  // const [termos,setTermos] = React.useState(false);

  const [cores,setCores] = React.useState(['vermelho']);

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
    {/* {termos && <p>Aceitou os termos</p>}
    <label htmlFor="">
      <input type="checkbox" value="termos" checked={termos} onChange={({target}) => {
        setTermos(target.checked)
      }}/>
      Li os termos.
    </label> */}

    <label htmlFor="">
      <input type="checkbox" value="azul" checked={checkColor('azul')} onChange={handleChange}/>
      Azul
    </label>
    <label htmlFor="">
      <input type="checkbox" value="vermelho" checked={cores.includes('vermelho')} onChange={handleChange}/>
      Vermelho
    </label>
   </form>
  )
}

export default App