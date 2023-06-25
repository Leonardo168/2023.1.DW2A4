import React, { useState } from "react"

import './App.css'

const App = () => {
  // let message = 'Olá Mundo!'
  const [message, setMessage] = useState('Olá Mundo!');
  
  return (
    <div>
      <div className="container">{message}</div>
      <button onClick={() => setMessage("Adeus Mundo!")}>
        Mudar mensagem
      </button>
    </div>
  );
};

export default App;