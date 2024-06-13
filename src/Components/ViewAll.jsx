import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changedData] = useState([])
    const fetchData = () =>{
        axios.post("http://localhost:8080/viewbus",data).then(
            (response)=>{
                changedData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                                       {data.map(
                                        (value, index)=>{
                                            return  <tr>
                                            <th scope="row">{value.bname}</th>
                                            <td>{value.broute}</td>
                                            <td>{value.bno}</td>
                                            <td>{value.driver}</td>
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

        </div>
    )
}

export default ViewAll