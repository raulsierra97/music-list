import axios from "axios"

export const getAllBands = () => {
    return (axios
    .get("https://rock-and-search-default-rtdb.firebaseio.com/bands.json")
    .then(({data})=> data) )
}