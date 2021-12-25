import axios from "axios"

export const saveBand = (personaObj) => {
    
    return (axios
    .post("https://rock-and-search-default-rtdb.firebaseio.com/bands.json",personaObj)
    .then(({data})=> {
        return data}
        ) )
}