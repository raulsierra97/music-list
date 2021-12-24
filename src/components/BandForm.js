const BandForm = ({handleSubmit, newName, handleChangeName, 
    newOrigin, handleChangeOrigin, newYears, handleChangeYears
    , newSpotify, handleChangeSpotify, handleCancelAdd}) => {  
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            Nombre*: <input value={newName} 
            onChange={handleChangeName} required/>
            </div>
            <div>
            Origen: <input value={newOrigin} 
            onChange={handleChangeOrigin}/>
            </div>
            <div>
            Periodo de actividad: <input value={newYears} 
            onChange={handleChangeYears}/>
            </div>
            <div>
            Enlace de canción de Spotify: <input value={newSpotify} 
            onChange={handleChangeSpotify}/>
            </div>
            <div>
            <button type="submit">Confirmar nueva banda</button>
            </div>
        </form>
        <button onClick={handleCancelAdd}>Cancelar</button>
    </div>
)
        }

export default BandForm