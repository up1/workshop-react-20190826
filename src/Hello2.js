import React, { useState } from 'react';

function Hello(props) {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <input type="text" onKeyUp={e => setName(e.target.value)} />
      <br/>
      <h2>{name}</h2>
    </div>
  );
}

export default Hello;