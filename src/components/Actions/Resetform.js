import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Resetform = () => {
    const {id} = useParams()
   
const [passtype, setShow] = useState('password');
const showPass = () =>{
     //set show or hide pass
    if(passtype === "password"){
        setShow("text");
    }else{
        setShow("password");
    }
}
    const [data, setData] = useState({
        password: "",
    })
    
    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    const resetpass = (e) =>{
    e.preventDefault()
    
    axios.put('http://localhost:3001/theemployee/updatePass',{
        password: data.password,
        userId: id,       
    })
    .then(function (response) {
        // handle success
        console.log(response.data);
        alert(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data.message);
        alert(error.response.data.message);
    })
}
    return (
            <Form className="loginform" onSubmit={resetpass}>
                <div className="profheader">
                    <h5>RESET FORM</h5>
                    <p>Reset your password</p>
                </div>
                <Form.Group className="mb-3" >
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type={passtype} placeholder="Password" id="password" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" label="Show password" onChange={showPass}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Reset
                </Button>
                <p>Proceed to login <Link to="/login">LOGIN</Link></p>
            </Form>
    )
}

export default Resetform
