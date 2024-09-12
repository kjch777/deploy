import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8081/api/hello")
    .then((response) => setMessage(response.data))
    .catch((error) => alert("오류 발생", error));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
