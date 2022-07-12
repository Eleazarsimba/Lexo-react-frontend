import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FiMenu} from 'react-icons/fi'

const Loginform = () => {
    const [passtype, setPass] = useState('password');
    const showPass = () =>{
     //set show or hide pass
    if(passtype === "password"){
        setPass("text");
    }else{
        setPass("password");
    }
}

const [show1, setShow] = useState('none');
const showMenu = () =>{
window.scrollTo({top: 0, behavior: 'smooth', display: 'block'}); 
//set show or hide pass
if(show1 === "none"){
    setShow("block");
}else{
    setShow("none");
}
}
// initialize form values
const [data, setData] = useState({
    email: "",
    password: "",
})
// set change form values
const handleChange = (e) =>{
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
}
// login user
const history = useHistory();
 const loGin = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/theemployee/login',{
        //set new values
        email: data.email,
        password: data.password        
    })
    .then(function (response) {
        // handle success
        console.log(response.data);
        window.localStorage.setItem('token', response.data.token);
        window.localStorage.setItem('role', response.data.user.role);
        window.localStorage.setItem('tokenemail', response.data.user.email);

        const role1 = localStorage.getItem('role');
        {role1 == "staff" ? history.push("/admin") : history.push("/emp");}
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data.error);
        alert(error.response.data.error)
    })
    }
    
    const adminpage = () =>{
        history.push('/login')
    }
    const reLoad = () =>{
        window.location.reload(true)
    }
    const theHome = () =>{
        history.push('/')
    }
    const theproducts = () =>{
        history.push('/producthere')
    }
    return (
        <div>
            <div style={{marginTop:"70px"}}>
                 {/* title bar */}
          <div className="mainmenu">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-4">
                  <h6 className="menup">
                  <img height="50px" width="100px"
                  src="logo192.png"
                  alt="First slide"
                  />
                  </h6>
              </div>
              <div className="col-lg-10 col-md-10 col-4">
                  <div className="menu1"> 
                      <ul>
                          <li onClick={theHome}>Home</li>
                          <li onClick={reLoad}>Offers</li>
                          <li onClick={theproducts}>Products</li>
                          <li onClick={adminpage}>Management</li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-2 col-md-2 col-4">
                  <h6 id="menuicon"><FiMenu color="#00ff00" size="25" className="socialacc" onClick={showMenu} /></h6>
              </div>
          </div>
      {/* </div> */}
          <div className="menu2" style={{display: show1}}> 
              <ul>
                  <li onClick={theHome}>Home</li>
                  <li onClick={reLoad}>Offers</li>
                  <li onClick={theproducts}>Products</li>
                  <li onClick={adminpage}>Management</li>
              </ul>
          </div> 

    </div>
            </div>
        <div className="theloginpage">
               
           <Form className="loginform" onSubmit={loGin}>
               <div className="profheader">
                <h5>LOGIN FORM</h5>
                <p>Enter email and password to login</p>
               </div>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" id="email" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={passtype} placeholder="Password" id="password" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" label="Show password" onChange={showPass}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Forgot your password <Link to="/resetpass">RESET</Link></p>
            </Form>
        
    </div>
    </div>
    )
}

export default Loginform
