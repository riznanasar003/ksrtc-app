import React from 'react'

const Login = () => {
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
                        <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="password" name="" id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success">LOGIN</button>

                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>

    </div>
  )
}

export default Login