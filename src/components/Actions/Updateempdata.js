import React, {useState} from 'react';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Updateempdata = ({email}) => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        salary: ""
    })
    
    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    // register new member
    const dataEdit = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:3001/theemployee/updateemployee/${email}`,{
            //set new values
            firstname: data.firstName,
            lastname: data.lastName,
            salary: data.salary
            
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
            setData(response.data)
            alert(response.data.message)
        })
        .catch(function (error) {
            // handle error
            console.log(error.response);
            alert(error.response.data.message)
        })
        }  
    return (
        <div>
            <Popup contentStyle={{width:'400px'}} trigger={<button type="button" className="btn btn-sm btn-info">Edit</button>} position="left center">
                <Form onSubmit={dataEdit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" id="firstName" onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" id="lastName" onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="text" placeholder="Enter salary" id="salary" onChange={handleChange} required/>
                    </Form.Group>
            
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Popup>
        </div>
    )
}

export default Updateempdata
