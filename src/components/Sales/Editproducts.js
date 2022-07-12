import React, {useState} from 'react';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Editproduct = ({prod}) => {
    const [data, setData] = useState({
        productdesc: "",
        price: ""
    })

    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    // register new member
    const pEdit = async (e) =>{
        e.preventDefault()
        await axios.put(`http://localhost:3001/theemployee/updateproduct/${prod.pname}`,{
            //set new values
            productdesc: data.productdesc,
            price: data.price
            
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
            setData(response.data)
            alert(response.data.message)
            window.location.reload(true)
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
                <Form onSubmit={pEdit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" id="firstName" value={prod.pname} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <textarea className="form-control" id="productdesc" placeholder={prod.productdesc} rows="2" onChange={handleChange} ></textarea>
                    </Form.Group>  
                    <Form.Group className="mb-3" >
                        <Form.Label>Price Per Litre in Ksh.</Form.Label>
                        <Form.Control type="number" placeholder={prod.price} id="price" onChange={handleChange} required />
                    </Form.Group>
            
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
                </Popup>
        </div>
    )
}

export default Editproduct
