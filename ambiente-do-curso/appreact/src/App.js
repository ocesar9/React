import React from 'react';
const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      {ativar && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivar(true)}>Ativar</button>
    </div>
  );
};

export default App;
