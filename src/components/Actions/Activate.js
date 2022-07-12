import React from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Activate = () => {
    const {email} = useParams()
    axios.put('http://localhost:3001/theemployee/activateuser',{
        userId: email,       
    })
    .then(function (response) {
        // handle success
        // console.log(userId);
        console.log(response.data);
        window.localStorage.setItem('token', response.data.token);
        alert(response.data.message)
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data);
        alert(error.response.data);
    })
    return (
        <div>
            <p>Account activated<Link to="/"> Go home</Link></p>
        </div>
    )
}

export default Activate
