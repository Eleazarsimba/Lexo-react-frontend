import React from 'react'
import axios from 'axios'

const Deleteproduct = ({imgdesc}) => {
    const deleteProduct = () => {
        axios.delete(`http://localhost:3001/theemployee/deleteproduct/${imgdesc}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            window.location.reload(true)
        })
        .catch(function (error) {
            // handle error
            console.log(error.response.data.error.message);
        })
    }
    return (
        <div>
            <button type="button" className="btn btn-sm btn-danger" onClick={deleteProduct}>REMOVE</button>
        </div>
    )
}

export default Deleteproduct
