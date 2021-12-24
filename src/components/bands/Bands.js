import Band from './Band'

const Bands = ({bands,newFilter}) => {
return (
    <ul>
    {bands.map( (band,index) => 
      /* Filtrado de lista a partir del buscador */
      (newFilter === "" || band.name.toUpperCase().includes(newFilter.toUpperCase()) ? 
      <Band key={band.id} band={band}
      /> : "")
      ) } 
    </ul>
  )

}

export default Bands