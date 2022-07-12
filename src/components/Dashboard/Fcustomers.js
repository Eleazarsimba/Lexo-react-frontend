import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios';

const Fcustomers = () => {
    const [fcus, setfCus] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/theemployee/fcustomers')
        .then(function (response) {
            // handle success
            // console.log(response.data.data);
            setfCus(response.data.data)
        })
        .catch(function (error) {
            // handle errors
            console.log(error.response);
        })
    },[]);
    return (
        <div className="col-lg-4 col-md-4 col-sm-4" style={{marginTop:"35px"}} >
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
        </div>
    )
}

export default Fcustomers
