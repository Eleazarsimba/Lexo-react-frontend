import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';

const Resetpass = () => {
    const [data, setData] = useState({
        email: "",
    })
    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    const getReset = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:3001/theemployee/resetpasslink/${data.email}`)
    .then(function (response) {
        // handle success
        console.log(response.data);
        alert("A reset link has been send to your email")
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data);
        alert(error.response.data.error.message)
    })
    }
    return (
        <div className="resetlink">
            <p>Enter your email to receive reset link</p>
            <Form className="loginform" onSubmit={getReset}>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" id="email" onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Resetpass
