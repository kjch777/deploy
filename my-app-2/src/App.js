import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [msg, setMsg] = useState();
  
  useEffect(() => {
    axios.get("http://localhost:8082/api/hi")
    .then((response) => setMsg(response.data))
    .catch((error) => alert("error: ", error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
