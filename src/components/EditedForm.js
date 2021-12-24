

const EditedForm = ({handleSubmitEdit, newName, handleChangeName, 
    newOrigin, handleChangeOrigin, newYears, handleChangeYears
    , newSpotify, handleChangeSpotify, handleCancelEdit, bands, 
    editedBandId}) => {
    var editedBand = {
        id: null,
        name: "",
            detail: {
                origin: "",
                yearsActive: "",
                spotify: ""
            }
    }
    if (editedBand !== undefined) {
    editedBand = bands.find(band => band.id === editedBandId)}
    
    return (
    <div>
        <form onSubmit={handleSubmitEdit}>
            <div>
            Nombre*: <input value={newName} placeholder={editedBand.name}
            onChange={handleChangeName} required/>
            </div>
            <div>
            Origen: <input value={newOrigin} placeholder={editedBand.detail.origin}
            onChange={handleChangeOrigin}/>
            </div>
            <div>
            Periodo de actividad: <input value={newYears} 
            placeholder={editedBand.detail.yearsActive}
            onChange={handleChangeYears}/>
            </div>
            <div>
            Enlace de canción de Spotify: <input value={newSpotify} 
            placeholder={editedBand.detail.spotify} 
            onChange={handleChangeSpotify}/>
            </div>
            <div>
            <button type="submit">Confirmar modificación de banda</button>
            </div>
        </form>
        <button onClick={handleCancelEdit}>Cancelar</button>
    </div>
)
        }

export default EditedForm