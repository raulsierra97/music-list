import './App.css';
import React, { useEffect, useState } from 'react'
import Bands from './components/bands/Bands'
import { getAllBands } from './services/getAllBands'
import Filter from './components/Filter';
import BandForm from './components/BandForm'
import { saveBand } from './services/saveBand';
import { deleteBand } from './services/deleteBand';

function App() {
  const [bands, setBands] = useState([]) 
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newOrigin, setNewOrigin] = useState('')
  const [newYears, setNewYears] = useState('')
  const [newSpotify, setNewSpotify] = useState('')
  //Estado para mostrar o no el formulario de añadir banda
  const [displayAdd, setDisplayAdd] = useState(false)

  useEffect(() => {
    getAllBands()
      .then((data) => setBands(data))
  })

  const handleChangeFilter = (event) => 
  setNewFilter(event.target.value)

  const handleChangeName = (event) => 
  setNewName(event.target.value)

  const handleChangeOrigin = (event) => 
  setNewOrigin(event.target.value)

  const handleChangeYears = (event) => 
  setNewYears(event.target.value)

  const handleChangeSpotify = (event) => 
  setNewSpotify(event.target.value)

  function handleSubmit(event) {
    event.preventDefault()
    if (bands.find(band => band.name === newName) !== undefined) {
      window.alert(`${newName} ya estaba añadido en la lista`)
    }
    else {
      const id=Math.max(bands.map(band => band.id))
      const bandaObj = {
        id: id+1,
        name: newName,
        detail: {
          origin: newOrigin,
          yearsActive: newYears,
          spotify: newSpotify
        }
      }
      const listaBandas = bands
      saveBand(bandaObj).then(() => setBands(listaBandas.concat(bandaObj)))
      setNewName("")
      setNewOrigin("")
      setNewYears("")
      setNewSpotify("")
    }
  }

  const handleDelete = (id) => {
    return () => {
    try{
    deleteBand(id)
    }
    catch (e){
      window.alert(`${newName} ya se había borrado de la lista`)
    }
    }
  }


  return (
    <div>
      <h1>Rock and Search</h1>
      <h2>Tus bandas clásicas de Rock and Roll</h2>
      { !displayAdd ? (<button onClick={()=> 
      setDisplayAdd(true)}>Añadir banda</button>) : ""}
      {displayAdd ? (<BandForm handleChangeName={handleChangeName}
      handleChangeOrigin={handleChangeOrigin}
      handleChangeYears={handleChangeYears}
      handleChangeSpotify={handleChangeSpotify}
      handleSubmit = {handleSubmit}
      newName = {newName}
      newOrigin = {newOrigin}
      newYears = {newYears}
      newSpotify = {newSpotify}
      setDisplayAdd={setDisplayAdd}
      />) : "" }
      <Filter newFilter={newFilter} 
      handleChangeFilter={handleChangeFilter}/>
      <h2>Bandas</h2>
      <Bands bands={bands} newFilter={newFilter} handleDelete={handleDelete}
      />    
    </div>
    
  );
}

export default App;
