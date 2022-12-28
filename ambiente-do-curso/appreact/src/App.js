import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Form from './Form.js';

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <React.Fragment>
      <Teste />
      <Header />
      App
      <Form />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default App;
