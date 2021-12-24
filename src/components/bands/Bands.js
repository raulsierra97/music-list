import Band from './Band'

const Bands = ({bands,newFilter, handleDelete}) => {
return (
    <ul>
    {bands.map( (band,index) => 
      /* Filtrado de lista a partir del buscador */
      (newFilter === "" || band.name.toUpperCase().includes(newFilter.toUpperCase()) ? 
      <Band key={band.id} band={band} handleDelete={handleDelete}
      /> : "")
      ) } 
    </ul>
  )

}

export default Bands