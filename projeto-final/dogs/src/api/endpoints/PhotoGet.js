import React from 'react';

const PhotoGet = () => {
  const [id, setId] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.id)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
