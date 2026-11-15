
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Connecting to backend...');

  useEffect(() => {
    axios.get('http://localhost:5000/api/health')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch(() => {
        setMessage('Backend connection failed');
      });
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>TaskFlow</h1>
      <h2>Task & Project Management System</h2>
      <p>Frontend: React is running successfully.</p>
      <p>Backend: {message}</p>
    </div>
  );
}

export default App;
