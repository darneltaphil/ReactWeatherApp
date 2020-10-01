import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'

function Login(){
function handleSubmit(){
localStorage.setItem('user','1254wperoeorjves5trrvtaert');
}	
	return(
	<div className="card bg-weather  justify-content-center container col-lg-4 col-md-6 col-sm-10 mt-5 p-0">
		<div className="card-header h5 text-white bg-info d-flex justify-content-center">Pre-MEST ReactJS Blog</div>
	<div className="login-form p-4">
		<div className="alert-warning p-3"> Please Use Any <strong>Username</strong> and <strong>Password</strong></div>
    <form action="/loginprocess" method="get" onSubmit={handleSubmit} >
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input type="text" id="un"  class="form-control" placeholder="Username" required="required"/>
        </div>
        <div className="form-group">
            <input type="password"  class="form-control" placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
        </div>
        <div className="clearfix">
        </div>        
    </form>
    <p class="text-center"><a href="#">Sign Up</a></p>
</div>
</div>
	)
}

export default Login