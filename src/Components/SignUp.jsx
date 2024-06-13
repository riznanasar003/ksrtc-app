import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const SignUp = () => {
    const [data,setData] = useState(
        {
        
            "name":"",
            "emailid":"",
            "phone":"",
            "gender":"",
            "pass":"",
            "conpass":""
        }
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Add Successfully")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch().finally()
    }
    <NavBar/>
  return (
    <div>

        <div className="container">
            <div className="row">
            <center>
                <h1>HEY !</h1>
                <h6>Create a new account</h6>
                </center>
                <br/><br/>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">USERNAME</label>
                        <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">EMAIL ID</label>
                        <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">PHONE NUMBER</label>
                        <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler}/>


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">GENDER</label>
                        <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="password" name="pass" value={data.pass} onChange={inputHandler} id="" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                        <input type="password" name="conpass" value={data.conpass} onChange={inputHandler} id="" className="form-control" />



                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-success" onClick={readValue}>SIGN UP</button>

                        </div>
                        </center>
                    </div>
                    <br/>
                    <center>
                    <p>Back to Login<Link to="/">Login</Link></p>
                    </center>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignUp