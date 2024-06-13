import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchBus = () => {
    const [data, setData] = useState(
        {
            "bno": ""
        }
    )
    const [result, setResult] = useState([])

    // delete evenet Handling

    const busDelete = (id) =>{
        let input = {"_id": id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully Deleted")
                    
                } else {
                    alert("Error in Deletion")
                    
                }
            }
        ).catch()
    }

    // value fetching
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]:event.target.value })

    }
    // search button event
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch().finally()

    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">BUS NO</label>
                        <input type="text" className="form-control" name='bno' value={data.bno} onChange={inputHandler}/>

                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success" onClick={readvalue}>SEARCH</button>

                        </div>
                        </center>
                    </div>
                </div>
                <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br />
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">BUS NAME</th>
                                        <th scope="col">BUS ROUTE</th>
                                        <th scope="col">BUS NO</th>
                                        <th scope="col">DRIVER NAME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.bname}</th>
                                                <td>{value.broute}</td>
                                                <td>{value.bno}</td>
                                                <td>{value.driver}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={()=>{busDelete(value._id)}}>REMOVE</button>
                                                </td>
                                            </tr>
                                        }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default SearchBus