import './App.css';
import React, { useEffect, useState } from 'react'
import Bands from './components/bands/Bands'
import { getAllBands } from './services/getAllBands'
import Filter from './components/Filter'
import BandForm from './components/BandForm'
import EditedForm from './components/EditedForm'
import { saveBand } from './services/saveBand'
import { deleteBand } from './services/deleteBand'
import Detail from './components/bands/Detail'


function App() {
  const [bands, setBands] = useState([]) 
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newOrigin, setNewOrigin] = useState('')
  const [newYears, setNewYears] = useState('')
  const [newSpotify, setNewSpotify] = useState('')
  //Estado para mostrar o no el formulario de añadir banda
  const [displayAdd, setDisplayAdd] = useState(false)
  //Estado para indicar la banda que se quiere editar
  const [editedBandId, setEditedBandId] = useState(null)
  const [detailBandId, setDetailBandId] = useState(null)

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

  function handleSubmitEdit(event) {
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
      deleteBand(editedBandId).then(
        ()=>saveBand(bandaObj).then(() => setBands(listaBandas.concat(bandaObj)))
      )
      setEditedBandId(null)
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
  function handleEdit(id) {
    
    return () => setEditedBandId(id)
  }

  const handleCancelAdd = () => {
    setDisplayAdd(false)
  }

  const handleCancelEdit = () => {
    setEditedBandId(null)
  }

  const handleDetail = (id) => {
    return () => setDetailBandId(id)
  }

  const handleCancelDetail = () => {
    setDetailBandId(null)
  }
  
  return (
    <div className='App'>
      <h1>Rock and Search</h1>
      <h2>Tus bandas clásicas de Rock and Roll</h2>
      <div>
        { !displayAdd ? (<button onClick={()=> 
        setDisplayAdd(true)}>Añadir banda</button>) : ""}
        {displayAdd ? 
        (<div>
          <h3>Añadir nueva banda</h3>
          <BandForm handleChangeName={handleChangeName}
          handleChangeOrigin={handleChangeOrigin}
          handleChangeYears={handleChangeYears}
          handleChangeSpotify={handleChangeSpotify}
          handleSubmit = {handleSubmit}
          newName = {newName}
          newOrigin = {newOrigin}
          newYears = {newYears}
          newSpotify = {newSpotify}
          handleCancelAdd={handleCancelAdd}
          />

        </div>
      ) : "" }
      
      {editedBandId!==null ? 
        (
          <div>
            <h3>Editar banda</h3>
            <EditedForm 
            handleChangeName={handleChangeName}
            handleChangeOrigin={handleChangeOrigin}
            handleChangeYears={handleChangeYears}
            handleChangeSpotify={handleChangeSpotify}
            newName = {newName}
            newOrigin = {newOrigin}
            newYears = {newYears}
            newSpotify = {newSpotify}
            handleSubmitEdit = {handleSubmitEdit}
            handleCancelEdit = {handleCancelEdit}
            bands={bands}
            editedBandId={editedBandId}
            />
          </div>) : ""}
          
      </div>
      <Filter newFilter={newFilter} 
      handleChangeFilter={handleChangeFilter}/>
      
      { !detailBandId ? (
      <div>
      <h2>Bandas</h2>
      <Bands bands={bands} newFilter={newFilter} 
      handleDelete={handleDelete} handleEdit={handleEdit} 
      handleDetail={handleDetail}
      /> </div>  ):
      <Detail detailBandId={detailBandId} bands={bands}
      handleCancelDetail={handleCancelDetail}/>
      }
      
    </div>
    
  );
}

export default App;
