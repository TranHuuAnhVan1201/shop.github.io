import React from 'react';
import { Link } from 'react-router-dom';
import './../css/register.css';
function Login(props) {
    return (
        <div class="container">
                <form id="form" class="form">
                    <h2>Login With Us</h2>
                    <div class="form-control">
                        <label for="username">Username</label>
                        <input type="text" id="username-login" placeholder="Enter username" />
                        <small>Error message</small>
                    </div>
                    <div class="form-control">
                        <label for="password">Password</label>
                        <input type="password" id="password-login" placeholder="Enter password" />
                        <small>Error message</small>
                    </div>
                <button type="submit">Submit</button>
                <div className="btn-login">
                    <Link to="/" className="btn-back link">
                        <i class="fas fa-long-arrow-alt-left">Back</i>
                    </Link>
                    <Link to="/register" className="btn-register link">
                        <i class="fas fa-long-arrow-alt-right">Register</i>
                    </Link> 
                </div>
                </form>
           
        </div>
    );
}

export default Login;