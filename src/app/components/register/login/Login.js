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
                
                </form>
           
        </div>
    );
}

export default Login;