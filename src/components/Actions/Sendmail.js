import React, {useState} from 'react';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Sendmail = ({email}) => {
    const [data, setData] = useState({
        email: email,
        subject: "",
        message: "",
    })
    
    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    const smsText = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/theemployee/messemail',{
        email: email,
        subject: data.subject,
        message: data.message
        
    })
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data.error.message);
    })
}
    return (
        <div>
            <Popup contentStyle={{width:'400px'}} trigger={<button type="button" className="btn btn-sm btn-info">Message</button>} position="left center">
            <Form onSubmit={smsText}>
                    <h4 style={{textAlign:'center'}}>Send an Email</h4>
                    <Form.Group className="mb-3" >
                        <Form.Label>To</Form.Label>
                        <Form.Control type="email" id="email" value={email}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" id="subject" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <textarea style={{width:'100%'}} type="text" rows="2" placeholder="Type your message" id="message" onChange={handleChange}></textarea>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        SEND
                    </Button>
                </Form>
                </Popup>
        </div>
    )
}

export default Sendmail
