import React from 'react'

const set1 = new Set();
const set2 = new Set();

// function operacoLenta(){
//   let c;
//   for(let i=0; i< 1000000; i++){
//     c = i+i/10
//   }
//   return c;
// }

const Produto = () => {
  const func1 = React.useCallback(() => {
    console.log('Teste1');
  },[]);

  const func2 = () => {
    console.log('Teste2');
  }

  set1.add(func1);
  set2.add(func2);

  console.log('Set1',set1);
  console.log('Set2',set2);

  return(
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  )
}

const App = () => {

  const [contar,setContar] = React.useState(0);

  // const valor = React.useMemo(() =>{
  //   const localItem = window.localStorage.getItem('produto');
  //   console.log('Aconteceu o memo');
  //   return localItem;
  // },[])
  // const t1 = performance.now();
  // const valor = React.useMemo(() => {
  //   operacoLenta();
  // },[]);
  // console.log(valor);
  // console.log(performance.now() - t1);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar+1);
  },[]);

  return (
    <div>
      <Produto/>

      {/* <button onClick={() => setContar(contar+1)}>{contar}</button> */}
      <button onClick={handleClick}>{contar}</button>

    </div>
  )
}

export default App