import React,{useState, useEffect, Fragment} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa'
import Deleteoffer from '../Actions/Deleteoffer';

const Alloffers = () => {
    const [cus, setCus] = useState([]);
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

      

    return (
        <div className='empdash'>
            <div className="dashboardinfo">
            <h3>Manage Offers</h3>
                <div className="newusericon">
                    <Link to="/offers"><FaPlus size="30" color="green" style={{marginRight: '5px', verticalAlign: 'middle', cursor: 'pointer'}} /></Link>
                    <div id="newusericontext">Add offer</div>
                </div>
        <table id="example" className="table table-striped" id="mytable1">
                <thead>
                     <tr>
                         <th scope="col">Image</th>
                         <th scope="col">Description</th>
                         <th scope="col">Remove</th>                         
                     </tr>
                 </thead>
            <tbody>
            <Fragment>
                {cus.map(offer => {   
                        return(
                            <tr key={offer.imgdesc}>
                                <td><img src={`/images/${offer.imgdesc}`}  alt="no image" width='50px' height="50px" /></td>
                                <td>{offer.offerdesc}</td>
                                <td>
                                    <Deleteoffer imgdesc={offer.imgdesc}/>
                                </td>
                            </tr>
                        );
                    })}  
            </Fragment> 
            </tbody>
        </table>
</div>
</div>
    )
}

export default Alloffers
