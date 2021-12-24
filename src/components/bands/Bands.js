import Band from './Band'

const Bands = ({bands}) => {
return (
    <ul>
    {bands.map( (band) =>  
      <Band key={band.name} band={band}/>)
      } 
    </ul>
  )

}

export default Bands