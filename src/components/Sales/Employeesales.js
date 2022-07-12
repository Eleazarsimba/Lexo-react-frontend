import React,{useState, useEffect} from 'react'
import axios from 'axios';

const Employeesales = () =>{
  const [data, setData] = useState([]);
  const email = localStorage.getItem('tokenemail');
  useEffect(() => {
    axios.get(`http://localhost:3001/theemployee/theitem/${email}`)
    .then(function (response) {
        // handle success
        console.log(response.data.data);
        setData(response.data.data)
    })
    .catch(function (error) {
        // handle errors
        console.log(error.response.data.error.message);
    })
    },[]);

    return (
      <div>
          <table id="example" className="table table-striped" id="mytable1">
                <thead>
                     <tr>
                        <th scope="col">PRODUCT</th>
                         <th scope="col">CAR NUMBER</th>
                         <th scope="col">NUMBER OF LITRES</th>
                         <th scope="col">DATE OF SALE</th>
                     </tr>
                 </thead>
            <tbody>
            {/* <Fragment> */}
         {data.map(sale => {   
                        return(
                            <tr key={sale.carNo}>
                                 <td>
                                    <>{sale.product}</>
                                </td>
                                <td>
                                    <>{sale.carNo}</>
                                </td>
                                <td>
                                    <>{sale.no_of_ltrs}</>
                                </td>
                                <td>
                                    <>{sale.date_refilled}</>
                                </td>
                            </tr>
                        );
                    })}  
            {/* </Fragment>  */}
            </tbody>
        </table>   
      </div>
    )
}
export default Employeesales