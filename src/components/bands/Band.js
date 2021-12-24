
const Band = ({band, handleDelete,handleEdit}) => {
    
    return <li>{band.name} 
    <button onClick={handleDelete(band.id)}>Eliminar</button>
    <button onClick={handleEdit(band.id)}>Editar</button>
    </li>

}

export default Band