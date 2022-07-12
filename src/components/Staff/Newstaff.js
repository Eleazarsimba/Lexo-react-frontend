import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';

const Newstaff = () => {
    const [passtype, setShow] = useState('password');
    const showPass = () =>{
        //set show or hide pass
        if(passtype === "password"){
            setShow("text");
        }else{
            setShow("password");
        }
    }
     //     //initialize form input
     const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        position: ""
    })
    
    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    // register new member
    const reGister = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/theemployee/newadmin',{
            //set new values
            firstname: data.firstName,
            lastname: data.lastName,
            email: data.email,
            password: data.password,
            position: data.position
            
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
            setData(response.data)
            alert(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error.response);
            alert(error.response.data.message)
        })
        }  
 
    return (
        <Form className="newuserform" onSubmit={reGister}>
            <h2>REGISTRATION FORM</h2>
            <h6>Create an account with Lexo Petrol station Kilifi</h6>
            <Form.Group className="mb-3" >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" id="firstName" onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" id="lastName" onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id="email" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Position</Form.Label>
                <Form.Control type="text" placeholder="Enter salary" id="position" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type={passtype} placeholder="Password" id="password" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Check type="checkbox" label="Show password" onChange={showPass}/>
            </Form.Group>
    
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Newstaff
