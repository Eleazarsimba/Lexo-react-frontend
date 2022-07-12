import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import {FaPlus} from 'react-icons/fa'
import Sendactivatelink from '../Actions/Sendactivatelink';
import Deleteemployee from './Deleteemployee';
import Updateempdata from '../Actions/Updateempdata';

const Manageemployee = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState([1]);
    const [postsPerPage] = useState([10]);

    useEffect(() => {
        axios.get('http://localhost:3001/theemployee/allemployees')
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setData(response.data.data);
        })
        .catch(function (error) {
            // handle errors
            console.log(error.response);
        })
        },[]);
    //get current item
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentItem = data.slice(indexOfFirstPost, indexOfLastPost);

    //creating pagination
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(data.length / postsPerPage); i++){
        pageNumbers.push(i)
    }
    //change page
    const handlePage = (number) => {
        setCurrentPage(number.selected + 1)
    }
    const [searchTerm, setTerm] = useState("")

    const filtred = data.filter((person) => {
        if (searchTerm === "") {
            return person
        }
            // filter by email
        else if (person.email.toString().toLowerCase().includes(searchTerm.toLowerCase())){
            return person
        }
    })

    return (
        <div>
            <div className="newusersearch">
                <div className="newusericon">
                    <Link to="/newemployee"><FaPlus size="30" color="green" style={{marginRight: '5px', verticalAlign: 'middle', cursor: 'pointer'}} /></Link>
                    <div id="newusericontext">Add employee</div>
                </div>
                <div className="input-group" id="searcharea">
                    <form>
                        <input type="search" className="form-control rounded" placeholder="&#128270; Search" aria-label="Search" id="searchvalue"
                        aria-describedby="search-addon" onChange={event => {setTerm(event.target.value)}} />
                    </form>
                </div>
            </div>
          <table id="example" className="table table-striped" id="mytable1">
                <thead>
                     <tr>
                         <th scope="col">EMAIL</th>
                         <th scope="col">EDIT</th>
                         <th scope="col">DELETE</th>
                         <th scope="col">ACTIVATE LINK</th>
                     </tr>
                 </thead>
            <tbody>
            {/* <Fragment> */}
                {filtred.slice(indexOfFirstPost, indexOfLastPost).map(person => {   
                        return(
                            <tr key={person.email}>
                                <td>{person.email}</td>
                                <td>
                                    <Updateempdata email={person.email}/>
                                </td>
                                <td>
                                    <Deleteemployee email={person.email}/>
                                </td>
                                <td>
                                    <Sendactivatelink email={person.email}/>
                                </td>
                            </tr>
                        );
                    })}  
            {/* </Fragment>  */}
            </tbody>
        </table>   

        <div>
            <ReactPaginate 
                previousLabel={'Previous'}
                nextLabel={'next'}
                breakLabel={''}
                marginPagesDisplayed={0}
                pageCount={Math.ceil(data.length / postsPerPage)}
                pageRangeDisplayed={3}
                onPageChange={handlePage}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    </div>
    )
}

export default Manageemployee
