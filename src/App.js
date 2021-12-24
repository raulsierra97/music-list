import './App.css';
import React, { useEffect, useState } from 'react'
import Bands from './components/bands/Bands'
import { getAllBands } from './services/getAllBands'
import Filter from './components/Filter';

function App() {
  const [bands, setBands] = useState([]) 
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    getAllBands()
      .then((data) => setBands(data))
  })

  const handleChangeFilter = (event) => 
  setNewFilter(event.target.value)

  return (
    <div>
      <h1>Rock and Search</h1>
      <Filter newFilter={newFilter} 
      handleChangeFilter={handleChangeFilter}/>
      <h2>Bandas</h2>
      <Bands bands={bands} newFilter={newFilter} 
      />    
    </div>
    
  );
}

export default App;
