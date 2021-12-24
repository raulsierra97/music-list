import './App.css';
import React, { useEffect, useState } from 'react'
import Bands from './components/bands/Bands'
import { getAllBands } from './services/getAllBands'

function App() {
  const [bands, setBands] = useState([]) 

  useEffect(() => {
    getAllBands()
      .then((data) => setBands(data))

  })
  return (
    <div>
      <h1>Rock and Search</h1>
      <h2>Bandas</h2>
      <Bands bands = {bands}
      />    
    </div>
    
  );
}

export default App;
