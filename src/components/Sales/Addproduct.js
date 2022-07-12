import React, {useState} from 'react'
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';

const Addproduct = () => {
    const [data, setUser] = useState({
        productdesc:"",
        price:"",
        pname:""
    })
  
    const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
 
      const handleImage = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };

      const handleChange = (e) => {
            const newdata = { ...data }
            newdata[e.target.id] = e.target.value
            setUser(newdata)
        };
 
      const saveOffer = async (e) => {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("filename", fileName);
        formData.append("productdesc", data.productdesc);
        formData.append("price", data.price);
        formData.append("pname", data.pname);
        try {
          const res = await axios.post(
            `http://localhost:3001/theemployee/newproduct`,
            formData
          );
          console.log(res);
          alert("Product added")
        } catch (ex) {
          console.log(ex);
          alert("Error or the product exist")
        }
      };
    return (
       
            <div className="card" style={{padding: '10px', width: '50%'}}>
            <Form className onSubmit={saveOffer}>
                <h3>New Product</h3>
                <Form.Group className="mb-3" >
                    <Form.Label>Image description</Form.Label>
                    <Form.Control type="file" accept="image/*" id="image" onChange={handleImage} required />
                </Form.Group> 
                <Form.Group className="mb-3" >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Product Name" id="pname" onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <textarea className="form-control" id="productdesc" rows="2" onChange={handleChange} placeholder="Type product description here..." ></textarea>
                </Form.Group>  
                <Form.Group className="mb-3" >
                    <Form.Label>Price Per Litre in Ksh.</Form.Label>
                    <Form.Control type="number" placeholder="Price" id="price" onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add product
                </Button>
            </Form>  
            </div>
    )
}

export default Addproduct

