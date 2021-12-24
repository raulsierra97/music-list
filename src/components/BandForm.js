const PersonForm = ({handleSubmit, newName, handleChangeName, 
    newOrigin, handleChangeOrigin, newYears, handleChangeYears
    , newSpotify, handleChangeSpotify, setDisplayAdd}) => (
    <div>
        <h2>Añadir nueva banda: </h2>
        <form onSubmit={handleSubmit}>
            <div>
            Nombre*: <input value={newName} onChange={handleChangeName} required/>
            </div>
            <div>
            Origen: <input value={newOrigin} onChange={handleChangeOrigin}/>
            </div>
            <div>
            Periodo de actividad: <input value={newYears} onChange={handleChangeYears}/>
            </div>
            <div>
            Enlace de canción de Spotify: <input value={newSpotify} onChange={handleChangeSpotify}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
        <button onClick={()=> 
        setDisplayAdd(false)}>Cancelar</button>
    </div>
)

export default PersonForm