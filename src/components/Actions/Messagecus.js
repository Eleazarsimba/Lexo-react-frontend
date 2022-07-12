import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';

const Messagecus = () => {
// initialize form values
const [data, setData] = useState({
    subject: "",
    html: "",
})
// set change form values
const handleChange = (e) =>{
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
}
 const mailAll = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/theemployee/messcustomers',{
        //set new values
        subject: data.subject,
        html: data.html        
    })
    .then(function (response) {
        // handle success
        console.log(response.data);
        alert("Message send")
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data.error);
        alert(error.response.data.error)
    })
    }  
    return (
           <Form className="loginform" onSubmit={mailAll}>
               <div>
                <p style={{fontSize:"14px", fontWeight:"bold"}}>Send message to all customers</p>
               </div>
                <Form.Group className="mb-3" >
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" id="subject" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <textarea style={{width:'100%'}} type="text" rows="2" placeholder="Type your message" id="html" onChange={handleChange}></textarea>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
    )
}

export default Messagecus

