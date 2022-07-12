import React from 'react'
import axios from 'axios'

const Deletestaff = ({email}) => {
    const delAdm = () => {
        axios.delete(`http://localhost:3001/theemployee/deleteadmin/${email}`)
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
            <button type="button" className="btn btn-sm btn-danger" onClick={delAdm}>DELETE</button>
        </div>
    )
}

export default Deletestaff
