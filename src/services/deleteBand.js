import axios from "axios"

export const deleteBand = (id) => {
  /*  const result = window.confirm("Confirm delete")
    if (result === true) {
    return (axios
    .delete("https://rock-and-search-default-rtdb.firebaseio.com/bands/"+id+".json")
    .then(({data})=> data) )
    .catch(error => {
        console.log(error)
        throw error
    })
    }
    */
}

// Con database local funcionaba pero con Firebase debo encontrar otra solución. 
//  Para la URL ya no sirve el id creado por mi, sino el autoid de Firebase