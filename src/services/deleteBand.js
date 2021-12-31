import axios from "axios"

export const deleteBand = (id) => {
    const result = window.confirm("Confirm delete")
    if (result === true) {
    return (axios
    .delete("http://localhost:3001/bands/"+id)
    .then(({data})=> data) )
    .catch(error => {
        console.log(error)
        throw error
    })
    }
}