import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios';
import {FiMenu} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import Fcustomers from './Fcustomers';

const Offers = () => {

    const [cus, setCus] = useState([]);
    // const [fcus, setfCus] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/theemployee/theoffer')
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setCus(response.data.data)
        })
        .catch(function (error) {
            // handle errors
            console.log(error.response);
        })
        },[]);
        

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
        const history = useHistory();
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
            </div>
                <div className="menu2" style={{display: show1}}> 
                    <ul>
                        <li onClick={theHome}>Home</li>
                        <li onClick={reLoad}>Offers</li>
                        <li onClick={theproducts}>Products</li>
                        <li onClick={adminpage}>Management</li>
                    </ul>
                </div> 

                {/* set offers   */}
            <div className="container" style={{marginTop:"35px"}}>
                <div id="freeoffer">
                    <div className="col-lg-8 col-md-8 col-sm-8" >
                    <Fragment>
                        {cus.map(offer => {   
                                return(
                                    <div className="container" key={offer.imgdesc}>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-4" id='offerimages' style={{width:'100%', margin:"10px"}}>
                                                <img src={`/images/${offer.imgdesc}`}  alt="no image" className="myimage" />
                                                <p style={{width:'50%', padding:"20px"}}>{offer.offerdesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}  
                    </Fragment> 
                    </div>
                    {/* <div className="col-lg-4 col-md-4 col-sm-4" style={{marginTop:"35px"}} >
                        <h4>Top customers eligible for free offers</h4>
                        <table id="example" className="table table-striped" id="mytable1">
                            <thead>
                                <tr>
                                    <th scope="col">Car No</th>
                                    <th scope="col">Number of visits</th>                        
                                </tr>
                            </thead>
                        <tbody>
                        <Fragment>
                            {fcus.map(person => {   
                                    return(
                                        <tr key={person.carNo}>
                                            <td>{person.carNo}</td>
                                            <td>{person.carTotal}</td>
                                        </tr>
                                    );
                                })}  
                        </Fragment> 
                        </tbody>
                    </table>
                    </div> */}
                    <Fcustomers />
                </div>
            </div>
        </div>
    )
}
export default Offers
