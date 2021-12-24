
const Band = ({band, handleDelete,handleEdit,handleDetail}) => {
    
    return <li>{band.name}  <button onClick={handleDetail(band.id)}>Más detalles</button> 
    <button onClick={handleEdit(band.id)}>Editar</button> 
    <button onClick={handleDelete(band.id)}>Eliminar</button>
    </li>

}

export default Band