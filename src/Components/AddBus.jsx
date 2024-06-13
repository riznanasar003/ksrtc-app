import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBus = () => {
    const [data,setData] = useState(
        {
        "bname":"",
        "broute":"",
        "bno":"",
        "driver":""
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (Response)=>{
                console.log(data)
                if (Response.data.status=="Success") {
                        alert("Successfully Added")
                    
                } else {
                    alert("Error")
                    
                }
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
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">BUS NAME</label>
                        <input type="text" className="form-control" name='bname' value={data.bname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">BUS ROUTE</label>
                        <input type="text" className="form-control" name='broute' value={data.broute} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">BUS NO</label>
                        <input type="text" className="form-control" name='bno' value={data.bno} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">DRIVER NAME</label>
                        <input type="text" className="form-control" name='driver' value={data.driver} onChange={inputHandler}/>

                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-success" onClick={readValue}>SUBMIT</button>

                        </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddBus