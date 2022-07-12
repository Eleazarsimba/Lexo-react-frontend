import React,{useState, useEffect, Fragment} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa'
import Deleteproduct from '../Actions/Deleteproduct';
import Editproduct from './Editproducts';

const Products = () => {
    const [cus, setCus] = useState([]);
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

      

    return (
        <div className='empdash'>
            <div className="dashboardinfo">
            <h3>Manage Products</h3>
                <div className="newusericon">
                    <Link to="/addproduct"><FaPlus size="30" color="green" style={{marginRight: '5px', verticalAlign: 'middle', cursor: 'pointer'}} /></Link>
                    <div id="newusericontext">Add product</div>
                </div>
        <table id="example" className="table table-striped" id="mytable1">
                <thead>
                     <tr>
                         <th scope="col">Image</th>
                         <th scope="col">Product Name</th>
                         <th scope="col">Description</th>
                         <th scope="col">Price</th>
                         <th scope="col">Edit</th>
                         <th scope="col">Remove</th>                         
                     </tr>
                 </thead>
            <tbody>
            <Fragment>
                {cus.map(product => {   
                        return(
                            <tr key={product.imgdesc}>
                                <td><img src={`/images/${product.imgdesc}`}  alt="no image" width='50px' height="50px" /></td>
                                <td>{product.pname}</td>
                                <td>{product.productdesc}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Editproduct prod={product}/>
                                </td>
                                <td>
                                    <Deleteproduct imgdesc={product.imgdesc}/>
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

export default Products
