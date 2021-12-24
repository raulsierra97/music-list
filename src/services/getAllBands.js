import axios from "axios"

export const getAllBands = () => {
    return (axios
    .get("http://localhost:3001/bands")
    .then(({data})=> data) )
}