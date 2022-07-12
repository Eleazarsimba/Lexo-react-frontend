import React,{useState} from 'react'
import axios from 'axios';
import $ from 'jquery';

const Employeedash = () => {
         //     //initialize form input
         const [value,setValue] = useState();
         const [data, setData] = useState({
            seller: "",
            carNo: "",
            no_of_ltrs: "",
            product: ""
        })
        
        const handleChange = (e) =>{
            const newdata = { ...data }
            newdata[e.target.id] = e.target.value
            setData(newdata)

            setValue({});
        }
        const logged = localStorage.getItem('tokenemail');
        // register new sale
        const reSale = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3001/theemployee/newsale',{
                //set new values
                seller: logged,
                carNo: data.carNo,
                no_of_ltrs: data.no_of_ltrs,
                product: data.product,   
            })
            .then(function (response) {
                // handle success
                console.log(response.data);
                setData(response.data)
                alert(response.data)
                window.location.reload(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error.response.data.error.message);
                alert(error.response.data.error.message)
            })
            }  

    // var option1 = document.getElementById('salelist1');
    var values1 = $('#product').val();
    
    return (
        <div className='empdash'>
        <div className="dashboardinfo">
            <h3>Sales Record</h3>
            
            <form onSubmit={reSale}>
                {/* <input type="hidden" name="sender_Id" value="Name" /> */}
                    <div className="form-group">
                        <p>Product Name 
                            <select id="product" onChange={handleChange} style={{width:"200px", marginLeft:"20px"}} >
                                <option value="Petrol" selected>Select product</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Kerosene">Kerosene</option>
                            </select>
                        </p>
                    </div>
                    {values1 == "Kerosene" ? "" :
                        <div className="form-group" id="kero">
                            <p>Car number
                                <input type="text" placeholder="Car number" style={{width:"200px", marginLeft:"40px"}} 
                                id="carNo" onChange={handleChange} />
                            </p>
                        </div>
                    }
                    <div className="form-group">
                        <p>No of litres 
                            <input type="number" placeholder="Amount sold" style={{width:"200px", marginLeft:"45px"}} 
                            id="no_of_ltrs" onChange={handleChange} required />
                        </p>
                    </div>
                    {/* <input type="hidden" name="sender_Id" value="text" /> */}
                <div className="savesaves">
                    <button type="submit" className="btn btn-md btn-primary" >Save</button>
                </div>
            </form>  
        </div>

</div>
    )
}

export default Employeedash
