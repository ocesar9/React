import React from 'react';

const App = () => {
  const [textarea, setTextArea] = React.useState();

  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextArea(target.value)}
        rows="5"
      ></textarea>
      {textarea}
    </form>
  );
};

export default App;
