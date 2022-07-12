import React,{useState, useEffect} from 'react'
import {MdOutlineMessage, MdManageAccounts} from 'react-icons/md'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admindash = () => {
    const [allemploe, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/theemployee/allemployees')
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setData(response.data.data)
        })
        .catch(function (error) {
            // handle errors
            console.log(error.response);
        })
        },[]);

    const [allstaff, setstaff] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/theemployee/allstaff')
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setstaff(response.data.data)
        })
        .catch(function (error) {
            // handle errors
            console.log(error.response);
        })
        },[]);

    return (
        <div className="dashboardinfo">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6" id="shadowbox" >
                        <Link to="/manageemployee" style={{textDecoration: 'none', color: 'white'}}>
                            <h4>{allemploe.length}</h4>
                            <p>Manage employees</p>
                            <MdManageAccounts size="60" style={{marginRight: '5px', verticalAlign: 'middle'}}/>
                        </Link>
                    </div>
                
                    <div className="col-lg-6 col-md-6 col-sm-6" id="shadowbox" >
                        <Link to="/managestaff" style={{textDecoration: 'none', color: 'white'}}>
                            <h4>{allstaff.length}</h4>
                            <p>Manage admins</p>
                            <MdManageAccounts size="60" style={{marginRight: '5px', verticalAlign: 'middle'}}/>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6" id="shadowbox" >
                        <Link to="/messageallemp" style={{textDecoration: 'none', color: 'white'}}>
                            <p>Send Bulk Message to Employees</p>
                            <MdOutlineMessage size="60" style={{marginRight: '5px', verticalAlign: 'middle'}}/>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6" id="shadowbox" >
                        <Link to="/messageallcus" style={{textDecoration: 'none', color: 'white'}}>
                            <p>Message customers</p>
                            <MdOutlineMessage size="60" style={{marginRight: '5px', verticalAlign: 'middle'}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admindash
