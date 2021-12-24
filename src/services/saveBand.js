import axios from "axios"

export const saveBand = (personaObj) => {
    return (axios
    .post("http://localhost:3001/bands",personaObj)
    .then(({data})=> {
        return data}
        ) )
}