import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios';
import {FiMenu} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

const Theproducts = () => {

    const [cus, setCus] = useState([]);
    // const [fcus, setfCus] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/theemployee/theproduct')
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
        const theoffers = () =>{
            history.push('/offerhere')
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
                                <li onClick={theoffers}>Offers</li>
                                <li onClick={reLoad}>Products</li>
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
                        <li onClick={theoffers}>Offers</li>
                        <li onClick={reLoad}>Products</li>
                        <li onClick={adminpage}>Management</li>
                    </ul>
                </div> 

                {/* set offers   */}
            <div className="container" style={{marginTop:"35px"}}>
                <div id="freeoffer">
                    <div className="col-lg-8 col-md-8 col-sm-8" >
                    <Fragment>
                        {cus.map(product => {   
                                return(
                                    <div className="container" key={product.imgdesc}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6" id='offerimages' style={{width:'100%', margin:"10px"}}>
                                                <img style={{width:'70%', padding:"20px"}} src={`/images/${product.imgdesc}`}  alt="no image" className="myimage" />
                                                <div>
                                                    <h3 style={{width:'20%', padding:"20px"}}>{product.pname}</h3>
                                                    <p>{product.productdesc}</p>
                                                    <p style={{width:'120px', backgroundColor:"grey", color:"#ffffff", padding:"20px", border:"1px solid black"}}>Ksh. {product.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}  
                    </Fragment> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Theproducts
