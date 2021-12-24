
const Band = ({band, handleDelete}) => {

    return <li>{band.name} <button onClick={handleDelete(band.id)}>Eliminar</button></li>

}

export default Band