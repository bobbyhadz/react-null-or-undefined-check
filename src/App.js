import './App.css';

import {useEffect, useState} from 'react';

export default function App() {
  const [message, setMessage] = useState(undefined);

  useEffect(() => {
    // 👇️ Check if NOT undefined or null
    if (message !== undefined && message !== null) {
      console.log('✅ variable is NOT undefined or null');
    }

    // 👇️ Check if undefined or null
    if (message === undefined || message === null) {
      console.log('✅ variable is undefined or null');
    } else {
      console.log('⛔️ variable is NOT undefined or null');
    }
  }, [message]);

  return (
    <div>
      <button onClick={() => setMessage('Hello world')}>
        Set message
      </button>

      <h2>{message}</h2>
    </div>
  );
}
