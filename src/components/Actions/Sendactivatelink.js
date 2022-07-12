import React, {useState} from 'react'
import axios from 'axios'

const Sendactivatelink = ({email}) => {
    const [data, setData] = useState({
        email: email,
    })
    const actIvate = (dispatch) => {
        // dispatch({ type: LOADING_USER });
        axios.post('http://localhost:3001/theemployee/activatelink',{
            email: email        
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
            alert(response.data)
            // window.location.reload(true)
        })
        .catch(function (error) {
            // handle error
            console.log(error.response.data.error.message);
            alert(error.response.data.error.message);
        })
    }
    return (
        <div>
            <button type="button" className="btn btn-sm btn-primary" onClick={actIvate}>ACTIVATE LINK</button>
        </div>
    )
}

export default Sendactivatelink
