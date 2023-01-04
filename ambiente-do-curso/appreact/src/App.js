import React from 'react'
import { GlobalContext, GlobalStorage } from './GlobalContext';
import Produto from './Produto';

const App = () => {
  // console.log(UserContext);
  // return (
  //   <UserContext.Provider value={{nome:'Andre'}}>
  //     <Produto/>
  //   </UserContext.Provider>
  // )

  return(
    <GlobalStorage>
        <Produto/> 
    </GlobalStorage>
  )
}

export default App