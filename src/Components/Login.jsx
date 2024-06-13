import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Login = () => {
    const [data,setData] = useState(
        {
            "emailid":"",
            "pass":""
        }
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8080/login",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    navigate("/add")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch().finally()
    }
    let navigate = useNavigate()
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <center>
                <h1>WELCOME !</h1>
                <h6>Sign in to continue</h6>
                </center>
                <br/><br/>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">EMAIL ID</label>
                        <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="password" name="pass" value={data.pass} onChange={inputHandler} id="" className="form-control" />

                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success" onClick={readValue}>LOGIN</button>

                        </div>
                        </center>
                    </div>
                    <br/>
                    <center>
                        <p>New User<Link to="/signup">Click here</Link></p>
                        </center>
                </div>
                
            </div>
            
        </div>

    </div>
  )
}

export default Login