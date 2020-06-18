import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState();

  const getTemp = async () => {
    try {
      const hum = await (await fetch('/api/soilmoisture/latest')).json()
      console.log(JSON.stringify(hum))
      setTemp(hum)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTemp();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2>{JSON.stringify(temp)}</h2>
      </header>
    </div>
  );
}

export default App;
