import Band from './Band'

const Bands = ({bands,newFilter}) => {
return (
    <ul>
    {bands.map( (band,index) => 
      (newFilter === "" || band.name.toUpperCase().includes(newFilter.toUpperCase()) ? 
      <Band key={band.name} band={band}
      /> : "")
      ) } 
    </ul>
  )

}

export default Bands