import React,{useState} from 'react'
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';

const Updateprofile = () => {
    const tokenemail = localStorage.getItem('tokenemail');
    const [data, setUser] = useState({
        firstName: "",
        lastName: ""
    })
    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setUser(newdata)
    }
    const updateData = (e) =>{
        e.preventDefault()
        
        axios.put(`http://localhost:3001/theemployee/updatenames/${tokenemail}`,{
            firstname: data.firstName,
            lastname: data.lastName       
        })
        .then(function (response) {
            // handle success
            console.log(response.data);
            setUser(response.data)
            alert(response.data.message)
        })
        .catch(function (error) {
            // handle error
            console.log(error.response.data.message);
            alert(error.response.data.message);
        })
    }

    // update profile picture
    const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
 
      const handleImage = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
      const updateProf = async (e) => {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("filename", fileName);
        try {
          const res = await axios.put(
            `http://localhost:3001/theemployee/updateprofile/${tokenemail}`,
            formData
          );
          console.log(res);
          alert("Profile picture updated")
        } catch (ex) {
          console.log(ex);
          alert("Update failed")
        }
      };
    return (
        <div id="updates" style={{display:"flex"}} >
            <div className="card" style={{padding: '10px', width: '50%'}} >
                <Form className onSubmit={updateData}>
                    <h3>Update Profile</h3>
                    <Form.Group className="mb-3" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" id="firstName" onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Last Name</Form.Label>
                       <Form.Control type="text" placeholder="Enter last name" id="lastName" onChange={handleChange} required />
                    </Form.Group>        
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>      
            </div>

            <div className="card" style={{padding: '10px', width: '50%'}}>
                    <Form className >
                        <h3>Profile Picture</h3>
                        <Form.Group className="mb-3" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="file" accept="image/*" id="image" onChange={handleImage} required />
                        </Form.Group>        
                        <Button variant="primary" type="submit" onClick={updateProf}>
                            Update
                        </Button>
                    </Form>  
            </div>
    
        </div>
    )
}

export default Updateprofile
