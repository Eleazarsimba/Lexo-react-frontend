import React, {useState} from 'react'
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';

const Manageoffers = () => {
    const [data, setUser] = useState({
        offerdesc:""
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
        formData.append("offerdesc", data.offerdesc);
        try {
          const res = await axios.post(
            `http://localhost:3001/theemployee/newoffer`,
            formData
          );
          console.log(res);
          alert("Offer added")
        } catch (ex) {
          console.log(ex);
          alert("Update failed")
        }
      };
    return (
       
            <div className="card" style={{padding: '10px', width: '50%'}}>
            <Form className onSubmit={saveOffer}>
                <h3>New Offer</h3>
                <Form.Group className="mb-3" >
                    <Form.Label>Image description</Form.Label>
                    <Form.Control type="file" accept="image/*" id="image" onChange={handleImage} required />
                </Form.Group> 
                <Form.Group className="mb-3" >
                    <textarea className="form-control" id="offerdesc" rows="2" onChange={handleChange} placeholder="Type offer description here..." ></textarea>
                </Form.Group>      
                <Button variant="primary" type="submit">
                    Add offer
                </Button>
            </Form>  
            </div>
    )
}

export default Manageoffers

