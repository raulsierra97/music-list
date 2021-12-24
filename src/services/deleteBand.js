import axios from "axios"

export const deleteBand = (id) => {
    const result = window.confirm("Confirm delete")
    if (result === true) {
    return (axios
    .delete("https://rock-and-search-default-rtdb.firebaseio.com/bands/"+id+".json")
    .then(({data})=> data) )
    .catch(error => {
        console.log(error)
        throw error
    })
    }
}