import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api')
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '20%' }}>
      <h1>🚀 AKS DevOps Project</h1>
      <h2>🔧 Message from Backend:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
